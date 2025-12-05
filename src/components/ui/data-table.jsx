"use client";
import React, { useState, useMemo } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    ChevronLeft,
    ChevronRight,
    Download,
    Printer,
    FileText,
    Sheet,
    Eye,
    Search,
} from 'lucide-react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const DataTable = ({
    columns,
    data = [],
    enablePagination = true,
    enableSorting = true,
    enableFiltering = true,
    enableRowSelection = true,
    enableColumnVisibility = true,
    enableExport = true,
    enableColumnFilters = true,
    enableActions = false,
    renderActions = null,
    actionsPosition = 'end',
    actionsColumnWidth = 'auto',
    actionsColumnHeader = 'Actions',
    pageSizeOptions = [5, 10, 20, 50],
    defaultPageSize = 10,
    onRowClick,
    onExport,
    onAction,
}) => {
    // State management
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'none' });
    const [rowSelection, setRowSelection] = useState({});
    const [columnFilters, setColumnFilters] = useState({});
    const [globalFilter, setGlobalFilter] = useState('');
    const [columnVisibility, setColumnVisibility] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(defaultPageSize);
    const [showExportOptions, setShowExportOptions] = useState(false);
    const [exportRange, setExportRange] = useState('all');
    const [exportColumns, setExportColumns] = useState('visible');

    // Actions are now completely handled by renderActions prop
    const hasActions = enableActions && renderActions;

    // Memoized data processing
    const processedData = useMemo(() => {
        let filtered = data;

        // Apply global filter
        if (globalFilter) {
            filtered = filtered.filter(item =>
                Object.values(item).some(val =>
                    String(val).toLowerCase().includes(globalFilter.toLowerCase())
                )
            );
        }

        // Apply column filters
        if (enableColumnFilters) {
            filtered = filtered.filter(item =>
                Object.entries(columnFilters).every(([key, value]) =>
                    !value || String(item[key]).toLowerCase().includes(value.toLowerCase())
                )
            );
        }

        // Apply sorting
        if (sortConfig.key && sortConfig.direction !== 'none') {
            filtered = [...filtered].sort((a, b) => {
                const aVal = a[sortConfig.key];
                const bVal = b[sortConfig.key];

                // Handle different data types
                if (typeof aVal === 'number' && typeof bVal === 'number') {
                    return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
                }

                const aStr = String(aVal).toLowerCase();
                const bStr = String(bVal).toLowerCase();

                if (sortConfig.direction === 'asc') {
                    return aStr.localeCompare(bStr);
                } else {
                    return bStr.localeCompare(aStr);
                }
            });
        }

        return filtered;
    }, [data, globalFilter, columnFilters, sortConfig, enableColumnFilters]);

    // Pagination
    const totalPages = pageSize === 'all' ? 1 : Math.ceil(processedData.length / pageSize);
    const startIndex = (currentPage - 1) * (pageSize === 'all' ? processedData.length : pageSize);
    const paginatedData = enablePagination && pageSize !== 'all'
        ? processedData.slice(startIndex, startIndex + pageSize)
        : processedData;

    // Get data for export based on selected range
    const getExportData = () => {
        switch (exportRange) {
            case 'current':
                return paginatedData;
            case 'selected':
                const selectedData = processedData.filter((_, index) => rowSelection[index]);
                return selectedData.length > 0 ? selectedData : processedData;
            case 'all':
            default:
                return processedData;
        }
    };

    // Get columns for export based on selection
    const getExportColumns = () => {
        const visibleCols = columns.filter(col => isColumnVisible(col.key));
        return exportColumns === 'visible' ? visibleCols : columns;
    };

    // Helper function to extract text from JSX/cell functions - FIXED VERSION
    const getCellTextValue = (row, column) => {
        try {
            // First, try to get the raw data value
            if (column.key && row[column.key] !== undefined) {
                const rawValue = row[column.key];
                if (rawValue == null) return '';
                if (typeof rawValue === 'string' || typeof rawValue === 'number' || typeof rawValue === 'boolean') {
                    return String(rawValue);
                }
            }

            // If column has a cell function, use it but extract text differently
            if (column.cell) {
                const cellContent = column.cell(row);
                
                // Handle basic types
                if (cellContent == null) return '';
                if (typeof cellContent === 'string' || typeof cellContent === 'number' || typeof cellContent === 'boolean') {
                    return String(cellContent);
                }

                // For React elements, extract text content
                if (React.isValidElement(cellContent)) {
                    return extractTextFromReactElement(cellContent);
                }

                // For any other object, try to convert to string
                return String(cellContent).replace(/\[object Object\]/g, '').trim();
            }

            // Fallback: try to get value by column key
            if (column.key && row[column.key] !== undefined) {
                const value = row[column.key];
                return value == null ? '' : String(value);
            }

            return '';
        } catch (error) {
            console.warn('Error extracting cell value:', error);
            return '';
        }
    };

    // Helper to extract text from React elements
    const extractTextFromReactElement = (element) => {
        if (!element) return '';
        
        // If element has children, extract text from them
        if (element.props && element.props.children) {
            const extractText = (children) => {
                if (children == null) return '';
                
                if (typeof children === 'string') {
                    return children;
                }
                
                if (typeof children === 'number' || typeof children === 'boolean') {
                    return String(children);
                }
                
                if (Array.isArray(children)) {
                    return children.map(child => extractText(child)).filter(Boolean).join(' ').trim();
                }
                
                if (React.isValidElement(children)) {
                    return extractTextFromReactElement(children);
                }
                
                return '';
            };
            
            const text = extractText(element.props.children);
            if (text) return text;
        }
        
        // Fallback for self-closing elements
        return element.type?.displayName || element.type?.name || '';
    };

    // Export functions - FIXED VERSION
    const exportToCSV = () => {
        const exportData = getExportData();
        const exportCols = getExportColumns();

        // Create headers
        const headers = exportCols.map(col => {
            const headerText = col.header || col.key || '';
            return `"${String(headerText).replace(/"/g, '""')}"`;
        }).join(',');

        // Create rows - use raw data values when possible
        const rows = exportData.map(row => {
            return exportCols.map(col => {
                // First try to get raw data value
                let value = '';
                if (col.key && row[col.key] !== undefined) {
                    const rawValue = row[col.key];
                    if (rawValue != null) {
                        value = String(rawValue);
                    }
                } else if (col.cell) {
                    // Only use cell function if no raw data available
                    value = getCellTextValue(row, col);
                }
                
                // Clean the value for CSV
                const escapedValue = String(value)
                    .replace(/"/g, '""') // Escape double quotes
                    .replace(/\[object Object\]/g, '') // Remove [object Object]
                    .replace(/\n/g, ' ') // Replace newlines with spaces
                    .replace(/\r/g, ' ') // Replace carriage returns with spaces
                    .trim();
                
                return `"${escapedValue}"`;
            }).join(',');
        }).join('\n');

        const csv = `${headers}\n${rows}`;
        downloadFile(csv, `data-${exportRange}-${exportColumns === 'visible' ? 'visible' : 'all'}.csv`, 'text/csv');
        setShowExportOptions(false);
    };

    const exportToExcel = () => {
        const exportData = getExportData();
        const exportCols = getExportColumns();

        // Create headers
        const headers = exportCols.map(col => {
            const headerText = col.header || col.key || '';
            return String(headerText).replace(/\t/g, ' ').replace(/\n/g, ' ');
        }).join('\t');

        // Create rows - use raw data values when possible
        const rows = exportData.map(row => {
            return exportCols.map(col => {
                // First try to get raw data value
                let value = '';
                if (col.key && row[col.key] !== undefined) {
                    const rawValue = row[col.key];
                    if (rawValue != null) {
                        value = String(rawValue);
                    }
                } else if (col.cell) {
                    // Only use cell function if no raw data available
                    value = getCellTextValue(row, col);
                }
                
                // Clean the value for Excel
                const cleanedValue = String(value)
                    .replace(/\[object Object\]/g, '') // Remove [object Object]
                    .replace(/\t/g, ' ') // Replace tabs with spaces
                    .replace(/\n/g, ' ') // Replace newlines with spaces
                    .replace(/\r/g, ' ') // Replace carriage returns with spaces
                    .trim();
                
                return cleanedValue;
            }).join('\t');
        }).join('\n');

        const excelData = `${headers}\n${rows}`;
        downloadFile(excelData, `data-${exportRange}-${exportColumns === 'visible' ? 'visible' : 'all'}.xls`, 'application/vnd.ms-excel');
        setShowExportOptions(false);
    };

    const printTable = () => {
        const exportData = getExportData();
        const exportCols = getExportColumns();

        const printWindow = window.open('', '_blank');

        // Create table rows
        const tableRows = exportData.map(row => {
            const cells = exportCols.map(col => {
                // Get cell value using the same logic as CSV/Excel export
                let value = '';
                if (col.key && row[col.key] !== undefined) {
                    const rawValue = row[col.key];
                    if (rawValue != null) {
                        value = String(rawValue);
                    }
                } else if (col.cell) {
                    value = getCellTextValue(row, col);
                }
                
                // Escape HTML entities
                const escapedValue = value
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#039;');
                
                return `<td>${escapedValue}</td>`;
            }).join('');
            
            return `<tr>${cells}</tr>`;
        }).join('');

        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Table</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                        th { background-color: #f5f5f5; font-weight: bold; }
                        .print-info { margin-bottom: 20px; color: #666; }
                        .print-info h2 { margin: 0 0 10px 0; }
                        .print-info p { margin: 5px 0; }
                    </style>
                </head>
                <body>
                    <div class="print-info">
                        <h2>Data Export</h2>
                        <p>Range: ${exportRange === 'all' ? 'All Data' : exportRange === 'current' ? 'Current Page' : 'Selected Rows'}</p>
                        <p>Columns: ${exportColumns === 'all' ? 'All Columns' : 'Visible Columns'}</p>
                        <p>Total Records: ${exportData.length}</p>
                        <p>Exported on: ${new Date().toLocaleString()}</p>
                    </div>
                    <table>
                        <thead>
                            <tr>${exportCols.map(col => `<th>${col.header || col.key}</th>`).join('')}</tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                        </tbody>
                    </table>
                    <script>
                        window.onload = function() {
                            window.print();
                            setTimeout(() => window.close(), 500);
                        };
                    </script>
                </body>
            </html>
        `);
        printWindow.document.close();
        setShowExportOptions(false);
    };

    const downloadFile = (content, filename, mimeType) => {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    // Enhanced Pagination Logic
    const getPaginationNumbers = () => {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const pages = [];
        const showEllipsis = totalPages > 7;

        if (currentPage <= 4) {
            pages.push(1, 2, 3, 4, 5);
            if (showEllipsis) pages.push('ellipsis');
            pages.push(totalPages);
        } else if (currentPage >= totalPages - 3) {
            pages.push(1);
            if (showEllipsis) pages.push('ellipsis');
            pages.push(
                totalPages - 4,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages
            );
        } else {
            pages.push(1);
            if (showEllipsis) pages.push('ellipsis');
            pages.push(currentPage - 1, currentPage, currentPage + 1);
            if (showEllipsis) pages.push('ellipsis');
            pages.push(totalPages);
        }

        return pages;
    };

    // Row Selection Handlers
    const handleSelectAll = (checked) => {
        if (checked) {
            const newSelection = {};
            processedData.forEach((_, index) => {
                newSelection[index] = true;
            });
            setRowSelection(newSelection);
        } else {
            setRowSelection({});
        }
    };

    const handleRowSelect = (index, checked) => {
        setRowSelection(prev => {
            const newSelection = { ...prev };
            if (checked) {
                newSelection[index] = true;
            } else {
                delete newSelection[index];
            }
            return newSelection;
        });
    };

    const isAllSelected = () => {
        return processedData.length > 0 && Object.keys(rowSelection).length === processedData.length;
    };

    const isSomeSelected = () => {
        return Object.keys(rowSelection).length > 0 && Object.keys(rowSelection).length < processedData.length;
    };

    // Calculate selected rows count
    const selectedRowsCount = Object.keys(rowSelection).length;

    // Handlers
    const handleSort = (key) => {
        if (!enableSorting) return;

        setSortConfig(prev => ({
            key,
            direction:
                prev.key === key && prev.direction === 'asc' ? 'desc' :
                    prev.key === key && prev.direction === 'desc' ? 'none' : 'asc'
        }));
        setCurrentPage(1);
    };

    const handleColumnFilter = (columnKey, value) => {
        setColumnFilters(prev => ({ ...prev, [columnKey]: value }));
        setCurrentPage(1);
    };

    const toggleColumnVisibility = (columnKey) => {
        setColumnVisibility(prev => ({ ...prev, [columnKey]: !prev[columnKey] }));
    };

    const isColumnVisible = (columnKey) => !columnVisibility[columnKey];

    const getSortIcon = (columnKey) => {
        if (!enableSorting) return null;
        if (sortConfig.key !== columnKey) return <FaSort className="ml-1 text-gray-400" size={12} />;
        if (sortConfig.direction === 'asc') return <FaSortUp className="ml-1 text-blue-600" size={12} />;
        if (sortConfig.direction === 'desc') return <FaSortDown className="ml-1 text-blue-600" size={12} />;
        return <FaSort className="ml-1 text-gray-400" size={12} />;
    };

    const visibleColumns = columns.filter(col => isColumnVisible(col.key));
    const paginationNumbers = getPaginationNumbers();

    return (
        <div className="space-y-3">
            {/* Controls Bar */}
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center rounded-lg">
                <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 w-full lg:w-auto">
                    {/* Page Size */}
                    {enablePagination && (
                        <select
                            value={pageSize === processedData.length ? 'all' : pageSize}
                            onChange={(e) => {
                                const value = e.target.value;
                                setPageSize(value === 'all' ? processedData.length : Number(value));
                                setCurrentPage(1);
                            }}
                            className="px-3 py-1 border rounded-md bg-white dark:bg-input/30"
                        >
                            {pageSizeOptions.map(size => (
                                <option key={size} value={size} className='dark:text-gray-800'>
                                    {size === 'all' ? 'All' : `${size} per page`}
                                </option>
                            ))}
                        </select>
                    )}
                    {/* Column Visibility */}
                    {enableColumnVisibility && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                    <Eye className="w-4 h-4 mr-2" />
                                    Columns
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {columns.map((column) => (
                                    <DropdownMenuCheckboxItem
                                        key={column.key}
                                        checked={isColumnVisible(column.key)}
                                        onCheckedChange={() => toggleColumnVisibility(column.key)}
                                    >
                                        {column.header}
                                    </DropdownMenuCheckboxItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}

                    {/* Export Options */}
                    {enableExport && (
                        <DropdownMenu open={showExportOptions} onOpenChange={setShowExportOptions}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                    <Download className="w-4 h-4 mr-2" />
                                    Export
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64">
                                <DropdownMenuLabel>Export Options</DropdownMenuLabel>

                                {/* Export Range Selection */}
                                <div className="px-2 py-1">
                                    <label className="text-xs font-medium text-gray-700 dark:text-gray-300">Export Range:</label>
                                    <select
                                        value={exportRange}
                                        onChange={(e) => setExportRange(e.target.value)}
                                        className="w-full mt-1 px-2 py-1 border rounded text-sm"
                                    >
                                        <option value="all">All Data ({processedData.length} records)</option>
                                        <option value="current">Current Page ({paginatedData.length} records)</option>
                                        <option value="selected" disabled={selectedRowsCount === 0}>
                                            Selected Rows ({selectedRowsCount} records)
                                        </option>
                                    </select>
                                </div>

                                {/* Columns Selection */}
                                <div className="px-2 py-1">
                                    <label className="text-xs font-medium text-gray-700 dark:text-gray-300">Columns:</label>
                                    <select
                                        value={exportColumns}
                                        onChange={(e) => setExportColumns(e.target.value)}
                                        className="w-full mt-1 px-2 py-1 border rounded text-sm"
                                    >
                                        <option value="visible">Visible Columns ({visibleColumns.length})</option>
                                        <option value="all">All Columns ({columns.length})</option>
                                    </select>
                                </div>

                                <DropdownMenuSeparator />

                                {/* Export Actions */}
                                <DropdownMenuItem onClick={exportToCSV}>
                                    <FileText className="w-4 h-4 mr-2" />
                                    Export as CSV
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={exportToExcel}>
                                    <Sheet className="w-4 h-4 mr-2" />
                                    Export as Excel
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={printTable}>
                                    <Printer className="w-4 h-4 mr-2" />
                                    Print Table
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>

                <div className="flex gap-2 flex-wrap w-full lg:w-fit justify-center">
                    {/* Global Search */}
                    {enableFiltering && (
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Search..."
                                value={globalFilter}
                                onChange={(e) => {
                                    setGlobalFilter(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="pl-10 w-full sm:w-64 bg-white"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Table */}
            <div className="border rounded-lg overflow-hidden bg-white dark:bg-zinc-900">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {/* Selection Checkbox */}
                            {enableRowSelection && (
                                <TableHead className="w-12">
                                    <Checkbox
                                        checked={isAllSelected()}
                                        onCheckedChange={handleSelectAll}
                                    />
                                </TableHead>
                            )}

                            {/* Actions Column at Start if configured */}
                            {hasActions && actionsPosition === 'start' && (
                                <TableHead 
                                    className="text-center" 
                                    style={{ width: actionsColumnWidth }}
                                >
                                    {actionsColumnHeader}
                                </TableHead>
                            )}

                            {/* Column Headers */}
                            {visibleColumns.map((column) => {
                                // Apply column width from config
                                const columnStyle = column.width ? { width: column.width } : {};
                                const columnClasses = column.className || '';

                                return (
                                    <TableHead
                                        key={column.key}
                                        className={`text-center ${columnClasses}`}
                                        style={columnStyle}
                                    >
                                        <div className="space-y-2">
                                            {/* Header with Sort */}
                                            <div
                                                className={`flex items-center justify-center p-2 rounded ${enableSorting ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900' : ''
                                                    }`}
                                                onClick={() => handleSort(column.key)}
                                            >
                                                <span className="font-medium">{column.header}</span>
                                                {getSortIcon(column.key)}
                                            </div>

                                            {/* Column Filter */}
                                            {enableColumnFilters && column.filterable !== false && (
                                                <Input
                                                    placeholder={`Filter ${column.header.toLowerCase()}...`}
                                                    value={columnFilters[column.key] || ''}
                                                    onChange={(e) => handleColumnFilter(column.key, e.target.value)}
                                                    className="h-8 text-sm mb-1"
                                                />
                                            )}
                                        </div>
                                    </TableHead>
                                );
                            })}

                            {/* Actions Column at End if configured */}
                            {hasActions && actionsPosition === 'end' && (
                                <TableHead 
                                    className="text-center" 
                                    style={{ width: actionsColumnWidth }}
                                >
                                    {actionsColumnHeader}
                                </TableHead>
                            )}
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, index) => {
                                const actualIndex = startIndex + index;

                                return (
                                    <TableRow
                                        key={actualIndex}
                                        className={onRowClick ? 'cursor-pointer hover:bg-gray-50' : ''}
                                        onClick={() => onRowClick && onRowClick(row)}
                                    >
                                        {/* Selection Checkbox */}
                                        {enableRowSelection && (
                                            <TableCell>
                                                <Checkbox
                                                    checked={rowSelection[actualIndex] || false}
                                                    onCheckedChange={(checked) => {
                                                        handleRowSelect(actualIndex, checked);
                                                    }}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            </TableCell>
                                        )}

                                        {/* Actions Cell at Start */}
                                        {hasActions && actionsPosition === 'start' && (
                                            <TableCell onClick={(e) => e.stopPropagation()}>
                                                {renderActions(row)}
                                            </TableCell>
                                        )}

                                        {/* Data Cells */}
                                        {visibleColumns.map((column) => {
                                            const columnClasses = column.cellClassName || 'text-center';

                                            return (
                                                <TableCell
                                                    key={column.key}
                                                    className={columnClasses}
                                                >
                                                    {column.cell ? column.cell(row) : row[column.key]}
                                                </TableCell>
                                            );
                                        })}

                                        {/* Actions Cell at End */}
                                        {hasActions && actionsPosition === 'end' && (
                                            <TableCell onClick={(e) => e.stopPropagation()}>
                                                {renderActions(row)}
                                            </TableCell>
                                        )}
                                    </TableRow>
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={
                                        visibleColumns.length +
                                        (enableRowSelection ? 1 : 0) +
                                        (hasActions ? 1 : 0)
                                    }
                                    className="h-24 text-center"
                                >
                                    No results found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 rounded-lg">
                {/* Selection Info */}
                <div className="text-sm text-gray-600 dark:text-gray-300">
                    {selectedRowsCount > 0 ? (
                        <>{selectedRowsCount} of {processedData.length} row(s) selected</>
                    ) : (
                        <>
                            {pageSize === 'all' ? (
                                `Showing all ${processedData.length} entries`
                            ) : (
                                `Showing ${startIndex + 1} to ${Math.min(startIndex + (pageSize === 'all' ? processedData.length : pageSize), processedData.length)} of ${processedData.length} entries`
                            )}
                        </>
                    )}
                </div>

                {/* Enhanced Pagination */}
                {enablePagination && pageSize !== 'all' && totalPages > 1 && (
                    <div className="flex items-center gap-1 scale-90 md:scale-100">
                        {/* Previous Button */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="w-8 h-8 p-0"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>

                        {/* Page Numbers */}
                        {paginationNumbers.map((pageNum, index) => (
                            <div key={index}>
                                {pageNum === 'ellipsis' ? (
                                    <span className="px-2 py-1 text-sm text-gray-500">...</span>
                                ) : (
                                    <Button
                                        variant={currentPage === pageNum ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`w-8 h-8 p-0 text-sm ${currentPage === pageNum ? 'bg-gray-600 text-white dark:hover:bg-gray-800' : ''}`}
                                    >
                                        {pageNum}
                                    </Button>
                                )}
                            </div>
                        ))}

                        {/* Next Button */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="w-8 h-8 p-0"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DataTable;