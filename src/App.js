import React, { useState } from 'react';
import './App.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function App() {
    const [likeColor, setLikeColor] = useState('');
    // Icon Toggle Method
    const handleLike = () => {
      const color = likeColor? '' : 'primary';
      setLikeColor(color)
    }
	return (
		<div style={{margin: '100px', }}>
			<ThumbUpIcon onClick={handleLike} color={likeColor}></ThumbUpIcon>
      
		</div>
	);
}

export default App;
