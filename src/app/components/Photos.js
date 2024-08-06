'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Photos = () => {
    const [photoList, setPhotoList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getPhotos = async () => {
            try {
                setLoading(true)
                const response = await axios.get('/api/photos');
                setPhotoList(response.data);
                setLoading(false)
            } catch(error) {
                console.log('error, error', error)
                setLoading(false)
            }
         
        }
        getPhotos();
    }, [])

    const [activeImage, setActiveImage] = useState(0);

	const clickNext = () => {
        if (photoList.length > 0) {
		activeImage === photoList.length - 1
			? setActiveImage(0)
			: setActiveImage(activeImage + 1);
        }
	};
	const clickPrev = () => {
        if (photoList.length > 0) {
		activeImage === 0
			? setActiveImage(photoList.length - 1)
			: setActiveImage(activeImage - 1);
        }
	};

    useEffect(() => {
		const timer = setTimeout(() => {
			clickNext();
		}, 5000);
		return () => {
			clearTimeout(timer);
		};
	}, [activeImage]);

    if (loading) {
        return <div>loading...</div>
    }

    return (
        <main className="grid place-items-center md:grid-cols-1 mx-auto border-b-2 md:border-b-2 md:border-1 pt-2 md:pt-5 px-2 md:px-5 max-w-5xl shadow-none mb-5 rounded-none">
            <div className="relative justify-center items-center transition-transform ease-in-out duration-300 md:rounded-2xl p-0 md:p-0">
                {photoList.length > 0 &&
                    photoList.map((elem, idx) => (
                        <div
                            key={idx}
                            className={`${
                                idx === activeImage
                                ? 'transition-all duration-300 ease-in-out'
                                : 'hidden'
                            }`}
                            >
                            <div>
                                <img
                                    src={elem.url}
                                    alt={elem.title}
                                    width={600}
                                    height={600}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    ))
                }
    
                <button
                onClick={clickPrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                >
                    &#9664;
                </button>
                <button
                onClick={clickNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                >
                    &#9654;
                </button>
            </div>
        </main>
      );
}

export default Photos;
