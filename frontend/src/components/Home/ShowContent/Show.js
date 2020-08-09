import React from 'react'
import { ShowStyled, ShowImage, ShowText } from './ShowStyled'
import ImgHome from '../../../assets/home.jpg'

const Show = () => {
    return (
        <ShowStyled>
            <ShowText>
                <h1> Death Meetup</h1>
                <h2> Plataforma para compartir conocimientos de tecnlogia, deporte , cultura de manera gratuita 🤝🏿 creado por el grupo Evil 4</h2>
            </ShowText>
            <ShowImage>
                <img src={ImgHome} width='750px' height='550px' />
            </ShowImage>

        </ShowStyled>
    )
}

export default Show
