# Video Caption Tool

## Description
The Video Caption Tool is a web application designed to enhance video accessibility and editing by allowing users to add, manage, and display captions. The tool lets users input a video URL directly, overlay captions dynamically, and supports fullscreen subtitle viewing. It also includes light and dark themes for improved accessibility and usability across different environments.

## Features
- Play videos directly from a provided URL.
- Add captions with customizable start and end times.
- View captions dynamically as the video plays.
- Edit and delete captions from an easy-to-use list.
- Toggle between light and dark themes for a personalized experience.
- Fully responsive design for compatibility across all screen sizes and devices.
- Seamless fullscreen caption display using WebVTT (`<track>`).

## Technology Stack
- **Frontend**: React for building a dynamic and interactive user interface.
- **Styling**: CSS with theme support (light/dark modes).
- **Subtitle Format**: WebVTT for robust and standards-compliant captioning.

## Technical Decisions
### Why React?
React was chosen for its component-based architecture, which simplifies the development of a modular and reusable codebase. Features like state management with hooks (`useState`) allow for dynamic updates to captions and themes without compromising performance.

### Video Playback from URL
The application supports video playback directly from a user-provided URL. This decision simplifies the user workflow, enabling them to work with hosted videos without additional uploads or configurations.

### Caption Management
Captions are managed dynamically through React state. The decision to use WebVTT ensures compatibility with modern video players and adherence to accessibility standards.

### Theme Support
CSS variables were used to implement light and dark themes, making it easy to maintain and extend the design. The theme toggle provides a seamless transition, enhancing user experience.

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AnujKV123/Video-Caption-Tool.git
   cd Video-Caption-Tool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   Or with yarn:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   Or with yarn:
   ```bash
   yarn start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. Enter the URL of a video hosted online in the input field.
2. Add captions by specifying the start time, end time, and text in the caption form.
3. View captions overlayed on the video as it plays.
4. Use the caption list to edit or delete existing captions.
5. Toggle between light and dark themes using the theme switcher.
6. Play the video in fullscreen mode to view captions seamlessly.

## Folder Structure
```
.
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── VideoPlayer.js
│   │   ├── CaptionInput.js
│   │   └── CaptionList.js
│   ├── App.js
│   ├── styles.css
│   └── index.js
├── package.json
└── README.md
```

## Key Components

### `VideoPlayer`
- Renders the video player with the given URL.
- Supports the `<track>` element for displaying subtitles in fullscreen mode.

### `CaptionInput`
- Form to input new captions with start time, end time, and text.
- Triggers the addition of captions to the list.

### `CaptionList`
- Displays a list of all added captions.
- Allows users to edit start/end times and caption text or delete existing captions.

### Styling
- CSS variables are used to manage light and dark themes.
- Responsive design ensures compatibility with all screen sizes.

## Trade-offs
- **Local vs. Hosted Video**: Supporting only hosted videos simplifies implementation but limits offline usage. Adding local video upload support could enhance usability.
- **Performance**: Managing captions dynamically with React state works well for small datasets but could become a bottleneck with numerous captions. Optimizations like memoization could address this.
- **Accessibility**: While WebVTT captions ensure standards compliance, more accessibility features (e.g., keyboard navigation) could be added.

## Future Enhancements
- Add support for uploading local video files.
- Implement caption export to `.vtt` or `.srt` formats for broader compatibility.
- Enhance user experience by adding real-time caption previews during editing.
- Introduce advanced styling options for captions, such as font size, color, and position adjustments.
- Optimize performance for large datasets by implementing virtualized lists for caption management.

## Contribution
Contributions are welcome! If you'd like to improve this project, please:
1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Push to the branch.
5. Open a pull request.

## Acknowledgments
- Built using React.
- Subtitle functionality powered by WebVTT and `<track>`.
- Inspiration from video editing tools and accessibility best practices.

