import React, { useState } from "react";
import "./WalkThrough.css"; // Import the CSS file

const WalkThrough = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Define the Markdown content as a string
  const markdownContent = `
  <div>
  <strong>Walk Through</strong>
  <p>Welcome to our client-side application guide.</p>
  <strong>Video Upload and Data</strong>
  <ul>
    <li><strong>Video Upload:</strong> Upload a store video by clicking "Choose File"</li>
    <li><strong>Video Name:</strong> Enter the video's name.</li>
    <li><strong>Overlapping Video:</strong> Specify overlapping video details.</li>
    <li><strong>Add Camera:</strong> Click the plus (+) logo to add more cameras.</li>
    <li><strong>Get Results"</strong> Click the Get Results button to get submit.</li>
  </ul>


  <p><strong>After submission, you'll receive:</strong></p>
  <ol>
  <li>Your Videos with bounding boxes.</li>
    <li>A graph showing the store's occupancy over time.</li>
    <li>Information on the number of people and average duration in the shop.</li>
    <li>Individual time spent inside.</li>
  </ol>

  <p>Contact our support team for more assistance. Thank you for using our system!</p>
</div>`;

  return (
    <div className={`walkthrough-container ${isCollapsed ? "" : "open"}`}>
      <div className="walkthrough">
        <button className="btn walkthrough-button" onClick={toggleCollapse}>
          <i class="bi bi-question-lg custom-large-icon"></i>{" "}
        </button>
        {isCollapsed ? null : (
          <div
            className="walkthrough-content"
            dangerouslySetInnerHTML={{ __html: markdownContent }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default WalkThrough;
