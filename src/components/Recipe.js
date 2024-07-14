import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Recipe({}) {
    const { id } = useParams()
    const url = 'http://127.0.0.1:8000/'
    const [recipe, setRecipe] = useState(false)

    useEffect(() => {
        axios.get(url + 'recipe/' + id).then((res) => {
            setRecipe(res.data)
        })
    }, [])

    if (!recipe) {
        return <></>
    }

    return (
        <>
            <h3>{recipe.title}</h3>
            {recipe.rating_avg}
            <p>{recipe.intro}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.directions}</p>
            {recipe.comments.map(c => 
                <p>{c}</p>
            )}
        </>
    )
}