import React from 'react'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import { Link } from 'react-router-dom'

const Playlists = props => {
  console.log(props.limiter)
  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: 'Home playlist 1',
      img:
        'https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 102,
      category_id: 3,
      name: 'Home playlist 2',
      img:
        'https://images.unsplash.com/photo-1587151711096-23c51f92c920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 3',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 4',
      img:
        'https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02%22',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 5',
      img:
        'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 6',
      img:
        'https://images.unsplash.com/photo-1626176297172-67b0330d7b97?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 104,
      category_id: 1,
      name: 'Focus playlist 1',
      img:
        'https://images.unsplash.com/photo-1626155215432-f2eb18552910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMjM2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 104,
      category_id: 1,
      name: 'Focus playlist 2',
      img:
        'https://images.unsplash.com/photo-1587165282385-fe9bbf5eb1a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 104,
      category_id: 1,
      name: 'Focus playlist 3',
      img:
        'https://images.unsplash.com/photo-1626111087345-7d2d1e8f5487?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 104,
      category_id: 1,
      name: 'Focus playlist 4',
      img:
        'https://images.unsplash.com/photo-1622495506501-f26a94ecf447?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 104,
      category_id: 1,
      name: 'Focus playlist 5',
      img:
        'https://images.unsplash.com/photo-1626074961596-cab914d9392e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 105,
      category_id: 4,
      name: 'Sunday playist 1',
      img:
        'https://images.unsplash.com/photo-1587143602695-c980e283be9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 105,
      category_id: 4,
      name: 'Sunday playist 2',
      img:
        'https://images.unsplash.com/photo-1598386867671-2f46bd1f68b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c291bmRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 105,
      category_id: 4,
      name: 'Sunday playist 3',
      img:
        'https://images.unsplash.com/photo-1611532736637-13a8bdf96127?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c291bmRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 105,
      category_id: 4,
      name: 'Sunday playist 4',
      img:
        'https://images.unsplash.com/photo-1579685055980-48dd748d862e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNvdW5kc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 105,
      category_id: 4,
      name: 'Sunday playist 5',
      img:
        'https://images.unsplash.com/photo-1593697909822-5d9da12b4680?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNvdW5kc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 105,
      category_id: 4,
      name: 'Sunday playist 6',
      img:
        'https://images.unsplash.com/photo-1598387077694-defac6071ecb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvdW5kc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 106,
      category_id: 2,
      name: 'Mood playist 1 ',
      img:
        'https://images.unsplash.com/photo-1587220111918-7a5c0f0c46f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 107,
      category_id: 2,
      name: 'Mood playist 2',
      img:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 107,
      category_id: 2,
      name: 'Mood playist 3',
      img:
        'https://images.unsplash.com/photo-1587169544748-d21bd810f57e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 107,
      category_id: 2,
      name: 'Mood playist 4',
      img:
        'https://images.unsplash.com/photo-1625856198862-87d5b7d0bf47?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 107,
      category_id: 2,
      name: 'Mood playist 5',
      img:
        'https://images.unsplash.com/photo-1625856198862-87d5b7d0bf47?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
    {
      id: 107,
      category_id: 2,
      name: 'Mood playist 6',
      img:
        'https://images.unsplash.com/photo-1626164764219-700b08950fd4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum',
    },
  ]

  let matchedPlaylists = dataPlaylists
    .filter(playlist => playlist.category_id === props.category_id)
    .slice(0, props.limiter)

  return (
    <div className="cardsWrapInner">
      {matchedPlaylists.map((playlist, id) => (
        <Link to={`/playlist/` + playlist.id} key={id}>
          <div className="card" key={id}>
            <div className="cardImage">
              <img src={playlist.img} alt="Pic 1" />
            </div>
            <div className="cardContent">
              <h3>{playlist.name}</h3>
              <span>{playlist.desc}</span>
            </div>
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Playlists
