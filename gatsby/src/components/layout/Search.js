import React, {useState} from 'react'
import styled from 'styled-components'

const Search = ({setQuery, query}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const resetFilter = (e) => {
        setSearchTerm('');
        setQuery('');
    }
    const updateQuery = (e) => {
        e.preventDefault();
        setQuery(searchTerm);
    }
    const updateSearchTerm = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    }
    return(
        <Form onSubmit = {updateQuery}>
        <SearchContainer>
            <SearchBar type='text' value={searchTerm} onChange = {updateSearchTerm} placeholder='Buscar artículos ...' />
            <SearchButton type='submit'>Search</SearchButton>
        </SearchContainer>
        <ResultContainer>
        {
            query && <div>
                <h2>Search results for "{query}":</h2>
                <ResetButton type='reset' value='Reset filter' onClick={resetFilter}></ResetButton>
            </div>
        }
        </ResultContainer>
    </Form>
    )
}

const Form = styled.form`
    margin: 4px;
`
const SearchContainer = styled.div`
    display: flex;
`
const ResultContainer = styled.div`
    padding: 16px;
`

const SearchBar = styled.input`
    width: 100%;
    padding: 4px auto;
    text-align: center;
`
const SearchButton = styled.button`
    color: var(--gray);
    background-color: var(--black);
    padding: 4px 8px;
`
const ResetButton = styled.input`
    background-color: var(--white);
    border: none;
    text-decoration: underline;
    text-decoration-style: dashed;
    &:hover {
        cursor: pointer;
        color: var(--darkOrange);
    }
`


export default Search