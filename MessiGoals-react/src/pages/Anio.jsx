import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAnioDetail } from '../Hooks/fetchData';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import { barsaImages } from '../images/dataImages';

const Anio = () => {
    const { id } = useParams()
    const golesAnio = useAnioDetail(id)
    let fechaAnio = "";
    if (golesAnio.length > 0) {
      fechaAnio = golesAnio[0].anio.anio;
    }

    const [image, setImage] = useState('')

    useEffect(() => {
      if (fechaAnio == '2005') {
        return setImage('https://cloudfront-us-east-1.images.arcpublishing.com/artear/JFKKRZOB6D5TOVS4H2UG6JDJHE.jpg')
      }
  
      if (fechaAnio == '2006') {
        return setImage('https://remezcla.com/wp-content/uploads/2020/08/GettyImages-74139211-e1598469614370.jpg');
      }
  
      if (fechaAnio == '2007') {
        return setImage('https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-2007-1588590273-37588.jpg?lm=1588590278')
      }

      if (fechaAnio == '2008') {
        return setImage('https://wallpaperaccess.com/full/6505327.jpg')
      }

      if (fechaAnio == '2009') {
        return setImage('https://media.tycsports.com/files/2020/05/27/100701/lionel-messi-2009.jpg')
      }

      if (fechaAnio == '2010') {
        return setImage('https://www.fcbarcelona.com/photo-resources/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg?width=1200&height=750')
      }

      if (fechaAnio == '2011') {
        return setImage('https://editorial.uefa.com/resources/01f0-0e78a29566f4-c88c462ea220-1000/lionel_messi_points_the_way_forward_for_barcelona.jpeg')
      }

      if (fechaAnio == '2012') {
        return setImage('https://images2.minutemediacdn.com/image/upload/c_crop,w_3519,h_1979,x_0,y_84/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01fnf1k8z2cyxv7e9p4x.jpg')
      }

      if (fechaAnio == '2013') {
        return setImage('https://images5.alphacoders.com/521/thumb-1920-521476.jpg')
      }

      if (fechaAnio == '2014') {
        return setImage('https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-10/Lionel%20Messi%20Mundial%202014%20Argentina%20Gol.jpg?itok=AgsYznxp')
      }

      if (fechaAnio == '2015') {
        return setImage('https://images1.newscred.com/cD1kY2I2YTU2NjU3MGQ4OTdjMGQ2ODgyMWUyMjY3ZjAzMCZnPWE4YTAyODViMzQ1YjJhYTdmMTZkYjYxNDZmNGE4YjQ4')
      }

      if (fechaAnio == '2016') {
        return setImage('https://pbs.twimg.com/media/CqesqiOW8AAp2DW.jpg:large')
      }

      if (fechaAnio == '2017') {
        return setImage('https://www.xtrafondos.com/descargar.php?id=3260&resolucion=3840x2160')
      }

      if (fechaAnio == '2018') {
        return setImage('https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/26151909/Argentina-vs-Nigeria-Mundial-Rusia-2018-74.jpg')
      }

      if (fechaAnio == '2019') {
        return setImage('https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltbdad9a83f7844331/60dabd4e892a730f5880740c/56921d3845d7e1cfecd12d9683308a9be542589a.png')
      }

      if (fechaAnio == '2020') {
        return setImage('https://i2.wp.com/ceritabola.com/wp-content/uploads/2020/05/dd71726619b69e8b6ce85452b1e0ba2a.jpg?fit=1800%2C1200')
      }

      if (fechaAnio == '2021') {
        return setImage('https://ocdn.eu/sport-images-transforms/1/8ofk9lBaHR0cHM6Ly9vY2RuLmV1L3B1bHNjbXMvTURBXy8zODUzMmE4NDg5YjUxZTZmYTMyZGY5Yjk1ZGJkNzAzNy5qcGeTlQMAzIzNEZTNCeOVAs0EsADCw5MJpjVlYTA3NwbeAAKhMAGhMQE/lionel-messi.jpg')
      }

      if (fechaAnio == '2022') {
        return setImage('https://img.zeit.de/sport/2022-12/lionel-messi-weltmeister-fussball-wm-argentinien-katar-bild/wide__980x551')
      }

      if (fechaAnio == '2023') {
        return setImage('https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/3UW4PH2YGFEA5OKVIS3HOGHCBU.jpg')
      }
  
      // setImage('https://images5.alphacoders.com/521/thumb-1920-521476.jpg')
    }, [fechaAnio])

  return (
    <>
    <Nav />
    <div className="banner">
        <img
          src={image}
          alt="Banner Image"
        />
      </div>
      <h1 className="h1-cant-goles">Goles en {fechaAnio} : {golesAnio.length}</h1>
      <div className='container-goles'>
      <ul>
        {
          golesAnio.map((goal, index) => (
            <div key={goal.id}>
              <li className='goles'>
                <a href={goal.link} target="_blank">{(index + 1)}) {goal.equipo.name} vs {goal.rival.name} / {goal.competicion.name} / {goal.anio.anio} {goal.tipoDeGol.name != 'normal' ? '( ' + goal.tipoDeGol.name + ' )' : ''}</a>
              </li>
            </div>
          ))
        }
      </ul>
      </div>
      <Footer />
    </>
  )
}

export default Anio