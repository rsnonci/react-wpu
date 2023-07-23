/* eslint-disable react/prop-types */
export default function Header({message}){
    return (<h1>Ini Header! {message? message : 'Ini harusnya pesan'}</h1>)
}