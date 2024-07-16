import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Header, Rating, Divider, Form, FormTextArea, FormButton, Segment, List, ListItem } from "semantic-ui-react"
import api from "../api"

export default function Recipe() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(false)
    const [comment, setComment] = useState('')

    const fetchRecipe = () => {
        axios.get(api + 'recipe/' + id + '/').then((res) => {
            setRecipe(res.data)
        })
    }

    useEffect(() => {
        fetchRecipe()
    })

    if (!recipe) {
        return <></>
    }

    const handleRating = (e, {rating}) => {
        axios.post(api + 'recipe/' + id + '/rating', {
            'rating': rating
        })
    }

    const handleCommentSubmit = () => {
        axios.post(api + 'recipe/' + id + '/comment', {
            'content': comment
        }).then(() => {
            fetchRecipe()
            setComment('')
        })
    }

    return (
        <Container>
            <Header as='h1'>{recipe.title}</Header>
            <Rating icon='star' defaultRating={recipe.rating_avg} maxRating={5} onRate={handleRating}/>
            <p>{recipe.intro}</p>
            <Divider />
            <Header as='h3'>Ingredients</Header>
            <List>
            {recipe.ingredients.map(i =>
                <ListItem>{i}</ListItem>
            )}
            </List>
            <Divider />
            <Header as='h3'>Directions</Header>
            <p>{recipe.directions}</p>
            <Divider />
            <Header as='h3'>Comments</Header>
            {recipe.comments.map(c => 
                <Segment>{c}</Segment>
            )}
            <Form onSubmit={handleCommentSubmit}>
                <FormTextArea
                    value={comment}
                    placeholder='Leave a comment'
                    onChange={(e, { value }) => setComment(value)}
                />
                <FormButton content='Submit' />
            </Form>
        </Container>
    )
}