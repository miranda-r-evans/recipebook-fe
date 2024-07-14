import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function RecipeList({}) {
    const [recipes, setRecipes] = useState([])

    const url = 'http://127.0.0.1:8000/'

    useEffect(() => {
        axios.get(url + 'recipes').then((res) => {
            setRecipes(res.data)
        })
    }, [])

    return (
        <ul>
            {recipes.map(r =>
                <li>
                    <Link to={'recipe/' + r.id}>{r.title}</Link>
                </li>
            )}
        </ul>
    )
}