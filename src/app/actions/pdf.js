"use server";

import fs from 'fs';
import path from 'path';

/**
 * Gets metadata for a list of PDF files.
 * @param {string[]} filePaths - Array of relative paths (e.g., ['file/sample.pdf'])
 * @returns {Promise<Object>} Object mapping paths to { size, pages }
 */
export async function getPdfMetadata(filePaths) {
    const metadata = {};
    const projectRoot = process.cwd();

    for (const filePath of filePaths) {
        try {
            // Clean the filePath: remove leading slash if present
            const cleanPath = filePath.startsWith('/') ? filePath.substring(1) : filePath;
            const absolutePath = path.resolve(projectRoot, 'public', cleanPath);

            if (!fs.existsSync(absolutePath)) {
                console.warn(`[PDF Action] File not found: ${absolutePath}`);
                metadata[filePath] = { size: 'N/A', pages: 'N/A', pathTried: absolutePath };
                continue;
            }

            const stats = fs.statSync(absolutePath);
            let sizeDisplay;
            if (stats.size < 1024 * 1024) {
                sizeDisplay = `${(stats.size / 1024).toFixed(2)}kb`;
            } else {
                sizeDisplay = `${(stats.size / (1024 * 1024)).toFixed(2)}mb`;
            }

            // Read as buffer for binary safety
            const buffer = fs.readFileSync(absolutePath);
            const contentString = buffer.toString('binary'); // binary encoding is safe for searching ASCII markers in binary files

            // Search for /Type /Page or /Type/Page
            const pageMatches = contentString.match(/\/Type\s*\/Page\b/g);
            const pageCount = pageMatches ? pageMatches.length : 'N/A';

            metadata[filePath] = {
                size: sizeDisplay,
                pages: pageCount === 'N/A' ? 'N/A' : `${pageCount} Page${pageCount === 1 ? '' : 's'}`
            };
        } catch (error) {
            console.error(`[PDF Action] Error processing PDF ${filePath}:`, error);
            metadata[filePath] = { size: 'Error', pages: 'Error' };
        }
    }

    return metadata;
}
