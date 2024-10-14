// VideoModal.tsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface VideoModalProps {
  show: boolean;
  handleClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ show, handleClose, videoUrl }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Video Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={videoUrl}
            title="Video"
            allowFullScreen
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VideoModal;
