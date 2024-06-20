# SEO Chrome Extension with Typescript

### Steps to Run Chrome Extension Locally
_Make sure Node is installed_

1. **Clone the Repository**
   ```sh
   git clone <repository_url>
   cd <repository_name>
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Build the Project**
  - Linux/Mac

     ```sh
     npm run build
     ```
  - Windows

     ```sh
     npm run build-ps
     ```

4. **Load Extension in Chrome**
   1. Open Chrome and navigate to `chrome://extensions/`.
   2. Enable "Developer mode" (toggle switch in the top right).
   3. Click "Load unpacked" and select the `dist` directory inside your project folder.

