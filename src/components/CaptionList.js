import React, { useState } from "react";

const CaptionList = ({ captions, setCaptions }) => {
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState({ start: "", end: null, text: null });

  const handleEditCaption = (id) => {
    const updatedCaptions = captions.map((caption) =>
      caption.id === id
        ? { ...caption, ...editingData }
        : caption
    );
    setCaptions(updatedCaptions);
    setEditingId(null);
  };

  const handleDeleteCaption = (id) => {
    const updatedCaptions = captions.filter((caption) => caption.id !== id);
    setCaptions(updatedCaptions);
  };

  const handleEditingChange = (field, value) => {
    setEditingData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    captions.length > 0 ? 
    <div className="caption-list-container-main">
    <div className="caption-list-container">
      <h2>All Captions</h2>
      <ul className="caption-list">
        {captions.map((caption) => (
          <li key={caption.id} className="caption-item">
            {editingId === caption.id ? (
              <>
                <input
                  type="number"
                  value={editingData.start}
                  onChange={(e) => handleEditingChange("start", e.target.value)}
                  placeholder="Start Time (in seconds)"
                  className="caption-input"
                />
                <input
                  type="number"
                  value={editingData.end}
                  onChange={(e) => handleEditingChange("end", e.target.value)}
                  placeholder="End Time (in seconds)"
                  className="caption-input"
                />
                <input
                  type="text"
                  value={editingData.text}
                  onChange={(e) => handleEditingChange("text", e.target.value)}
                  placeholder="Caption Text"
                  className="caption-input caption-input-text"
                />
                <button
                  disabled={(editingData.start==="" || editingData.end==="" || editingData.text==="")||( Number(editingData.start) > Number(editingData.end))}
                  onClick={() => handleEditCaption(caption.id)}
                  className="button button-save"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="button button-cancel"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="caption-info">
                  <strong>Start:</strong> {caption.start} | <strong>End:</strong>{" "}
                  {caption.end} | <strong>Text:</strong> {caption.text}
                </span>
                <button
                  onClick={() => {
                    setEditingId(caption.id);
                    setEditingData({
                      start: caption.start,
                      end: caption.end,
                      text: caption.text,
                    });
                  }}
                  className="button button-edit"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCaption(caption.id)}
                  className="button button-delete"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
    : null
  );
};

export default CaptionList;
