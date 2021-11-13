import React, { useEffect, useState } from 'react';
import axios from 'axios';


const useStoryBlog = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://mighty-sands-29370.herokuapp.com/storyblogs')
            .then(result => {
                setData(result.data.storyBlog);

            })
    }, [])

    return [data, setData];
};

export default useStoryBlog;