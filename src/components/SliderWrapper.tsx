import React from 'react'
import nonfiction from '../data/categories/nonfiction.json';
import fiction from '../data/categories/fiction.json';
import children from '../data/categories/children.json';
import self_improvement from '../data/categories/self_improvement.json';
import SliderRow from './SliderRow'
function SliderWrapper() {
    const genres = [nonfiction, fiction, children, self_improvement]

    return (
        <>
            {genres.map((genre, i) => {
                let theme = "white";
                if (genre.background) {
                    theme = "black";
                }
                return (
                    <SliderRow genre={genre} key={i} theme={theme}></SliderRow>
                )
            })
            }
        </>
    )
}

export default SliderWrapper