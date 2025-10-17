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
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import {
    ChevronLeft,
    ChevronRight,
    Download,
    Printer,
    FileText,
    Sheet,
    Eye,
    MoreHorizontal,
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
    pageSizeOptions = [5, 10, 20, 50],
    defaultPageSize = 10,
    onRowClick,
    onExport,
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
    const [exportRange, setExportRange] = useState('all'); // 'all', 'current', 'selected'
    const [exportColumns, setExportColumns] = useState('visible'); // 'all', 'visible'

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

                if (sortConfig.direction === 'asc') {
                    return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
                } else {
                    return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
                }
            });
        }

        return filtered;
    }, [data, globalFilter, columnFilters, sortConfig, enableColumnFilters]);

    // Pagination
    const totalPages = pageSize === 'all' ? 1 : Math.ceil(processedData.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = enablePagination && pageSize !== 'all'
        ? processedData.slice(startIndex, startIndex + pageSize)
        : processedData;

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
        return exportColumns === 'visible'
            ? columns.filter(col => isColumnVisible(col.key))
            : columns;
    };

    // Helper function to extract text from JSX/cell functions
    const getCellTextValue = (row, column) => {
        if (column.cell) {
            const cellContent = column.cell(row);

            // If it's a React element (JSX), we need to extract text content
            if (React.isValidElement(cellContent)) {
                // For simple elements like Badge, we can extract children
                if (cellContent.props && cellContent.props.children) {
                    return String(cellContent.props.children);
                }
                // For more complex JSX, return a fallback
                return String(cellContent.type) || '';
            }

            // If it's already a string/number, return it directly
            return String(cellContent);
        }

        // Default to raw data value
        return String(row[column.key] || '');
    };

    // Export functions
    const exportToCSV = () => {
        const exportData = getExportData();
        const exportColumns = getExportColumns();

        const headers = exportColumns.map(col => col.header).join(',');
        const rows = exportData.map(row =>
            exportColumns.map(col => {
                const value = getCellTextValue(row, col);
                return `"${String(value).replace(/"/g, '""')}"`;
            }).join(',')
        ).join('\n');

        const csv = `${headers}\n${rows}`;
        downloadFile(csv, `data-${exportRange}-${exportColumns === 'visible' ? 'visible' : 'all'}.csv`, 'text/csv');
        setShowExportOptions(false);
    };

    const exportToExcel = () => {
        const exportData = getExportData();
        const exportColumns = getExportColumns();

        const headers = exportColumns.map(col => col.header).join('\t');
        const rows = exportData.map(row =>
            exportColumns.map(col => {
                const value = getCellTextValue(row, col);
                return String(value).replace(/\t/g, ' ');
            }).join('\t')
        ).join('\n');

        const excelData = `${headers}\n${rows}`;
        downloadFile(excelData, `data-${exportRange}-${exportColumns === 'visible' ? 'visible' : 'all'}.xls`, 'application/vnd.ms-excel');
        setShowExportOptions(false);
    };

    const printTable = () => {
        const exportData = getExportData();
        const exportColumns = getExportColumns();

        const printWindow = window.open('', '_blank');

        // Create table rows with proper text content
        const tableRows = exportData.map(row => `
            <tr>
                ${exportColumns.map(col => `
                    <td>${getCellTextValue(row, col)}</td>
                `).join('')}
            </tr>
        `).join('');

        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Table</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        table { width: 100%; border-collapse: collapse; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                        th { background-color: #f5f5f5; font-weight: bold; }
                        .print-info { margin-bottom: 20px; color: #666; }
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
                    <table border="1">
                        <thead>
                            <tr>${exportColumns.map(col => `<th>${col.header}</th>`).join('')}</tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                        </tbody>
                    </table>
                    <script>window.print(); setTimeout(() => window.close(), 500);</script>
                </body>
            </html>
        `);
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

    // Fixed Row Selection Handlers
    const handleSelectAll = (checked) => {
        if (checked) {
            // Select all rows in the processed data (all filtered data)
            const newSelection = {};
            processedData.forEach((_, index) => {
                newSelection[index] = true;
            });
            setRowSelection(newSelection);
        } else {
            // Clear all selections
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

                            {/* Column Headers */}
                            {visibleColumns.map((column) => (
                                <TableHead key={column.key} className="text-center">
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
                            ))}

                            {/* Actions Column */}
                            <TableHead className="w-20 text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, index) => {
                                // Get the actual index in the processedData array
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

                                        {/* Data Cells */}
                                        {visibleColumns.map((column) => (
                                            <TableCell key={column.key} className="text-center">
                                                {column.cell ? column.cell(row) : row[column.key]}
                                            </TableCell>
                                        ))}

                                        {/* Actions Cell */}
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm">
                                                        <MoreHorizontal className="w-4 h-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                                    <DropdownMenuItem className="text-red-600">
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={
                                        visibleColumns.length +
                                        (enableRowSelection ? 1 : 0) +
                                        1 // +1 for actions column
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
                                `Showing ${startIndex + 1} to ${Math.min(startIndex + pageSize, processedData.length)} of ${processedData.length} entries`
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