import React, { useEffect, useState } from 'react';
import axios from 'axios';


const useStoryBlog = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/storyblogs')
            .then(result => {
                setData(result.data.storyBlog);

            })
    }, [])

    return [data, setData];
};

export default useStoryBlog;