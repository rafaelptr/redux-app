import React from 'react';
/***
 * As props vem dos atributos do componente
 * 
 * ex: 
 *  attributos
 *      variavel=valor
 */
export const Titulo = (props) =>  (   
    <h1>{props.children}</h1>
)