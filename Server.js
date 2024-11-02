import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT || 8000;

const _filename = url.fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const server = http.createServer(async (req, res) => {
    try {
        let filepath;

        // Handle only GET requests
        if (req.method === 'GET') {
            // Define file paths based on URL
            if (req.url === '/') {
                filepath = path.join(_dirname, 'public', 'index.html');
            } else if (req.url === '/about') {
                filepath = path.join(_dirname, 'public', 'about.html');
            } else {
                // Send 404 Not Found for unknown URLs
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
                return;
            }

            // Read and send the requested file
            const data = await fs.readFile(filepath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            // Send 405 Method Not Allowed for non-GET requests
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('405 Method Not Allowed');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error: ' + error.message);
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
