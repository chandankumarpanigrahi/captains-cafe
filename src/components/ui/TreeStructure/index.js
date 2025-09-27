"use client"

import React from "react"
import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core"
import { useTree } from "@headless-tree/react"

import { Tree, TreeItem, TreeItemLabel } from "@/components/ui/tree"

const items = {
    company: {
        name: "Company",
        children: ["engineering", "marketing", "operations"],
    },
    engineering: {
        name: "Engineering",
        children: ["frontend", "backend", "platform-team"],
    },
    frontend: { 
        name: "Frontend", 
        children: ["design-system", "web-platform"] },
        "design-system": {
            name: "Design System",
            children: ["components", "tokens", "guidelines"],
    },
    components: { name: "Components" },
    tokens: { name: "Tokens" },
    guidelines: { name: "Guidelines" },
    "web-platform": { name: "Web Platform" },
    backend: { name: "Backend", children: ["apis", "infrastructure"] },
    apis: { name: "APIs" },
    infrastructure: { name: "Infrastructure" },
    "platform-team": { name: "Platform Team" },
    marketing: { name: "Marketing", children: ["content", "seo"] },
    content: { name: "Content" },
    seo: { name: "SEO" },
    operations: { name: "Operations", children: ["hr", "finance"] },
    hr: { name: "HR" },
    finance: { name: "Finance" },
}

const indent = 20

export default function Component() {
    const tree = useTree({

        indent,
        rootItemId: "company",
        getItemName: (item) => item.getItemData().name,
        isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
        dataLoader: {
            getItem: (itemId) => items[itemId],
            getChildren: (itemId) => items[itemId].children ?? [],
        },
        features: [syncDataLoaderFeature, hotkeysCoreFeature],
    })

    return (
        <div className="flex h-full flex-col gap-2 *:first:grow">
            <Tree indent={indent} tree={tree}>
                {tree.getItems().map((item) => {
                    return (
                        <TreeItem key={item.getId()} item={item}>
                            <TreeItemLabel />
                        </TreeItem>
                    )
                })}
            </Tree>
        </div>
    )
}