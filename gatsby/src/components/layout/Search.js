import React, { useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

const Search = ({ query, closeHeader }) => {
    const [searchTerm, setSearchTerm] = useState(query);

    const updateQuery = (e) => {
        e.preventDefault();
        navigate("/", { state: { query: searchTerm } });
        closeHeader();
    };
    const updateSearchTerm = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };
    return (
        <Form onSubmit={updateQuery}>
            <SearchContainer>
                <SearchBar
                    type="text"
                    value={searchTerm}
                    onChange={updateSearchTerm}
                    placeholder="🔎 Busca artículo"
                />
                <SearchButton type="submit">Search</SearchButton>
            </SearchContainer>
        </Form>
    );
};

const Form = styled.form`
    margin: 4px;
`;
const SearchContainer = styled.div`
    display: flex;
`;

const SearchBar = styled.input`
    width: 100%;
    padding: 8px auto;
    text-align: center;
    border-left: none;
    border-right: none;
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    outline: none;
    height: 44px;
`;
const SearchButton = styled.button`
    color: var(--gray);
    background-color: var(--black);
    padding: 4px 8px;
    display: none;
`;

export default Search;
