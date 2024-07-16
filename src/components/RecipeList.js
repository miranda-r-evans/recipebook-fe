import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container, Header, List, ListItem, Rating } from "semantic-ui-react"
import api from "../api"

export default function RecipeList({}) {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get(api + 'recipes').then((res) => {
            setRecipes(res.data)
        })
    }, [])

    return (
        <Container>
        <Header as='h1'>Recipes</Header>
        <List>
            {recipes.map(r =>
                <ListItem>
                    <Link to={'recipe/' + r.id}>{r.title}</Link>
                    <Rating icon='star' defaultRating={r.rating_avg} maxRating={5} disabled />
                </ListItem>
            )}
        </List>
        </Container>
    )
}