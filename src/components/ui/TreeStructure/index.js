"use client"

import React, { useEffect, useRef, useState } from "react"
import {
    expandAllFeature,
    hotkeysCoreFeature,
    searchFeature,
    selectionFeature,
    syncDataLoaderFeature,
} from "@headless-tree/core"
import { useTree } from "@headless-tree/react"
import {
    CircleXIcon,
    FilterIcon,
    FolderIcon,
    FolderOpenIcon,
    ExternalLinkIcon,
} from "lucide-react"

import { Input } from "@/components/ui/input"
import { Tree, TreeItem, TreeItemLabel } from "@/components/ui/tree"
import { Badge } from "@/components/ui/badge" // Make sure you have this component

const items = {
    company: {
        name: "Company",
        children: ["engineering", "marketing", "operations"],
        link: "/company",
        badge: "updated",
    },
    engineering: {
        name: "Engineering",
        children: ["frontend", "backend", "platform-team"],
        link: "/engineering",
    },
    frontend: {
        name: "Frontend",
        children: ["design-system", "web-platform"],
        link: "/frontend",
        badge: "new",
    },
    "design-system": {
        name: "Design System",
        children: ["components", "tokens", "guidelines"],
        link: "/design-system",
    },
    components: { 
        name: "Components",
        link: "/components",
        badge: "popular",
    },
    tokens: { 
        name: "Tokens",
        link: "/tokens",
    },
    guidelines: { 
        name: "Guidelines",
        link: "/guidelines",
    },
    "web-platform": { 
        name: "Web Platform",
        link: "/web-platform",
    },
    backend: { 
        name: "Backend", 
        children: ["apis", "infrastructure"],
        link: "/backend",
    },
    apis: { 
        name: "APIs",
        link: "/apis",
    },
    infrastructure: { 
        name: "Infrastructure",
        link: "/infrastructure",
    },
    "platform-team": { 
        name: "Platform Team",
        link: "/platform-team",
    },
    marketing: { 
        name: "Marketing", 
        children: ["content", "seo"],
        link: "/marketing",
    },
    content: { 
        name: "Content",
        link: "/content",
    },
    seo: { 
        name: "SEO",
        link: "/seo",
    },
    operations: { 
        name: "Operations", 
        children: ["hr", "finance"],
    },
    hr: { 
        name: "HR",
        link: "/hr",
    },
    finance: { 
        name: "Finance",
        // link: "/finance",
    },
}

const indent = 20

// Function to get all folder IDs for initial expansion
const getAllFolderIds = () => {
    const folderIds = []
    for (const [id, item] of Object.entries(items)) {
        if (item.children && item.children.length > 0) {
            folderIds.push(id)
        }
    }
    return folderIds
}

// Badge component for different types
const ItemBadge = ({ type }) => {
    const badgeConfig = {
        new: { label: "New", variant: "default" },
        updated: { label: "Updated", variant: "secondary" },
        popular: { label: "Popular", variant: "outline" },
    }

    const config = badgeConfig[type] || { label: type, variant: "outline" }

    return (
        <Badge variant={config.variant} className="ml-2 text-xs">
            {config.label}
        </Badge>
    )
}

export default function Component() {
    // Open all folders at initial stage
    const initialExpandedItems = getAllFolderIds()
    const [state, setState] = useState({})
    const [searchValue, setSearchValue] = useState("")
    const inputRef = useRef(null)
    const [filteredItems, setFilteredItems] = useState([])

    const tree = useTree({
        state,
        setState,
        initialState: {
            expandedItems: initialExpandedItems,
        },
        indent,
        rootItemId: "company",
        getItemName: (item) => item.getItemData().name,
        isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
        dataLoader: {
            getItem: (itemId) => items[itemId],
            getChildren: (itemId) => items[itemId].children ?? [],
        },
        features: [
            syncDataLoaderFeature,
            hotkeysCoreFeature,
            selectionFeature,
            searchFeature,
            expandAllFeature,
        ],
    })

    const handleClearSearch = () => {
        setSearchValue("")
        const searchProps = tree.getSearchInputElementProps()
        if (searchProps.onChange) {
            const syntheticEvent = {
                target: { value: "" },
            }
            searchProps.onChange(syntheticEvent)
        }

        setState((prevState) => ({
            ...prevState,
            expandedItems: initialExpandedItems,
        }))

        setFilteredItems([])

        if (inputRef.current) {
            inputRef.current.focus()
            inputRef.current.value = ""
        }
    }

    const shouldShowItem = (itemId) => {
        if (!searchValue || searchValue.length === 0) return true
        return filteredItems.includes(itemId)
    }

    // Handle item click with optional link
    const handleItemClick = (item, event) => {
        const itemData = item.getItemData()
        
        // If the item has a link, navigate to it
        if (itemData.link) {
            event.preventDefault()
            event.stopPropagation()
            // Use your preferred navigation method
            window.location.href = itemData.link
            // Or if using Next.js: router.push(itemData.link)
            // Or if using React Router: navigate(itemData.link)
            return // Don't proceed with tree operations if navigating
        }
        
        // If it's a folder, toggle expansion using the proper API
        if (item.isFolder()) {
            if (item.isExpanded()) {
                item.collapse()
            } else {
                item.expand()
            }
        }
    }

    useEffect(() => {
        if (!searchValue || searchValue.length === 0) {
            setFilteredItems([])
            return
        }

        const allItems = tree.getItems()

        const directMatches = allItems
            .filter((item) => {
                const name = item.getItemName().toLowerCase()
                return name.includes(searchValue.toLowerCase())
            })
            .map((item) => item.getId())

        const parentIds = new Set()
        directMatches.forEach((matchId) => {
            let item = tree.getItems().find((i) => i.getId() === matchId)
            while (item?.getParent && item.getParent()) {
                const parent = item.getParent()
                if (parent) {
                    parentIds.add(parent.getId())
                    item = parent
                } else {
                    break
                }
            }
        })

        const childrenIds = new Set()
        directMatches.forEach((matchId) => {
            const item = tree.getItems().find((i) => i.getId() === matchId)
            if (item && item.isFolder()) {
                const getDescendants = (itemId) => {
                    const children = items[itemId]?.children || []
                    children.forEach((childId) => {
                        childrenIds.add(childId)
                        if (items[childId]?.children?.length) {
                            getDescendants(childId)
                        }
                    })
                }

                getDescendants(item.getId())
            }
        })

        setFilteredItems([
            ...directMatches,
            ...Array.from(parentIds),
            ...Array.from(childrenIds),
        ])

        const currentExpandedItems = tree.getState().expandedItems || []

        const folderIdsToExpand = allItems
            .filter((item) => item.isFolder())
            .map((item) => item.getId())

        setState((prevState) => ({
            ...prevState,
            expandedItems: [
                ...new Set([...currentExpandedItems, ...folderIdsToExpand]),
            ],
        }))
    }, [searchValue, tree])

    return (
        <div className="flex h-full flex-col gap-2 *:first:grow">
            <div className="relative">
                <Input
                    ref={inputRef}
                    className="peer ps-9 bg-white"
                    value={searchValue}
                    onChange={(e) => {
                        const value = e.target.value
                        setSearchValue(value)

                        const searchProps = tree.getSearchInputElementProps()
                        if (searchProps.onChange) {
                            searchProps.onChange(e)
                        }

                        if (value.length > 0) {
                            tree.expandAll()
                        } else {
                            setState((prevState) => ({
                                ...prevState,
                                expandedItems: initialExpandedItems,
                            }))
                            setFilteredItems([])
                        }
                    }}
                    onBlur={(e) => {
                        e.preventDefault()
                        if (searchValue && searchValue.length > 0) {
                            const searchProps = tree.getSearchInputElementProps()
                            if (searchProps.onChange) {
                                const syntheticEvent = {
                                    target: { value: searchValue },
                                }
                                searchProps.onChange(syntheticEvent)
                            }
                        }
                    }}
                    type="search"
                    placeholder="Filter items..."
                />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <FilterIcon className="size-4" aria-hidden="true" />
                </div>
                {searchValue && (
                    <button
                        className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 transition-[color,box-shadow] outline-none hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label="Clear search"
                        onClick={handleClearSearch}
                    >
                        <CircleXIcon className="size-4" aria-hidden="true" />
                    </button>
                )}
            </div>

            <Tree indent={indent} tree={tree} className="relative before:absolute before:inset-0 before:-ms-1 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]">
                {searchValue && filteredItems.length === 0 ? (
                    <p className="px-3 py-4 text-center text-sm">
                        No items found for "{searchValue}"
                    </p>
                ) : (
                    tree.getItems().map((item) => {
                        const isVisible = shouldShowItem(item.getId())
                        const itemData = item.getItemData()
                        const hasLink = !!itemData.link
                        const hasBadge = !!itemData.badge

                        return (
                            <TreeItem
                                key={item.getId()}
                                item={item}
                                data-visible={isVisible || !searchValue}
                                className="data-[visible=false]:hidden"
                            >
                                <TreeItemLabel>
                                    <div 
                                        className={`flex items-center justify-between w-full  rounded px-2 py-1 ${hasLink ? 'cursor-pointer hover:bg-accent' : ''}`}
                                        onClick={(e) => handleItemClick(item, e)}
                                    >
                                        <div className="flex items-center gap-2 flex-1 min-w-0">
                                            {item.isFolder() &&
                                                (item.isExpanded() ? (
                                                    <FolderOpenIcon className="pointer-events-none size-4 text-muted-foreground shrink-0" />
                                                ) : (
                                                    <FolderIcon className="pointer-events-none size-4 text-muted-foreground shrink-0" />
                                                ))}
                                            <span className="truncate">{item.getItemName()}</span>
                                            {hasBadge && <ItemBadge type={itemData.badge} />}
                                        </div>
                                        <div className="flex items-center gap-1 ml-2 shrink-0">
                                            {hasLink && (
                                                <ExternalLinkIcon className="size-3 text-muted-foreground opacity-60" />
                                            )}
                                        </div>
                                    </div>
                                </TreeItemLabel>
                            </TreeItem>
                        )
                    })
                )}
            </Tree>
        </div>
    )
}