import React, { useState } from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState<Array<FilmType>>([]);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState<Array<FilmType>>([]);

    type FilmType = {
        Title: string
        Year: string
        imdbID: string
        Type: string
        Poster: string
    }

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(response => {
                setSerachResult(response.data.Search)
            })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
            .then(response => {
                setSerachResultByType(response.data.Search)
        })
    }

    const serachNameResultMapped = serachResult ? serachResult.map((film, index) => {
        return <li key={index}>{film.Title} - {film.Year}</li>
    }): null

    const serachResultByTypeMapped = serachResultByType ? serachResultByType.map((film, index) => {
        return <li key={index}>{film.Title} - {film.Year} - {film.Type}</li>
    }): null

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                { serachResult.length > 1 && <ul>{serachNameResultMapped}</ul>}
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                { serachResultByType.length > 1 && <ul>{serachResultByTypeMapped}</ul>}
            </div>
        </div>
    );
}
export default Lesson3;