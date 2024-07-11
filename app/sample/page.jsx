"use client"
import React, { useState } from 'react';
import DeleteModal from '../component/modal/DeleteModal';

const YourComponent = () => {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        // Perform delete logic here
        console.log('Deleting...');
        // Close modal after deleting
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={() => setShowModal(true)} className="bg-red-500 text-white px-4 py-2 rounded">
                Delete Item
            </button>
            <DeleteModal isOpen={showModal} onClose={() => setShowModal(false)} onDelete={handleDelete} />
        </div>
    );
};

export default YourComponent;
