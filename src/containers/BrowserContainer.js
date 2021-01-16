import React, { useContext, useState, useEffect } from "react"
import ProfilesContainer from "./ProfilesContainer"
import { FirebaseContext } from "../context/firebase"
import { Loading, Header } from "../components"
import logo from "../logo.svg"
import * as ROUTES from "../constants/routs"
import { Card, Player } from "../components"
import FooterContainer from "./FooterContainer"
import Fuse from "fuse.js"

export default function BrowserContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext)
  // const { user } = useAuthListener()
  console.log(firebase)
  const [category, setCategory] = useState("series")
  const [slideRows, setSlideRows] = useState([])

  const logout = firebase.auth()
  const user = firebase.auth().currentUser || {}
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [profile.displayName])
  useEffect(() => {
    setSlideRows(slides[category])
  }, [category, slides])
  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ["data.description", "data.title", "data.genre"] })
    const results = fuse.search(searchTerm).map(({ item }) => item)

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results)
    } else {
      setSlideRows(slides[category])
    }
  }, [searchTerm])
  return (
    <div>
      {profile.displayName ? (
        <>
          {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

          <Header src="joker1">
            <Header.Frame>
              <Header.Group>
                <Header.Logo src={logo} to={ROUTES.HOME} />
                <Header.TextLink active={category === "films" ? "true" : "false"} onClick={() => setCategory("films")}>
                  Filmes
                </Header.TextLink>
                <Header.TextLink active={category === "series" ? "true" : "false"} onClick={() => setCategory("series")}>
                  Series
                </Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.Search searchTerm={searchTerm} setSearch={setSearchTerm} />

                <Header.Profile>
                  <Header.Picture src={user.photoURL} />
                  <Header.Dropdown>
                    <Header.Group>
                      <Header.Picture src={user.photoURL} />
                      <Header.TextLink>{user.displayName}</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                      <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                    </Header.Group>
                  </Header.Dropdown>
                </Header.Profile>
              </Header.Group>
            </Header.Frame>
            <Header.Feature>
              <Header.FeatureTitle>Watch Joker Now</Header.FeatureTitle>
              <Header.FeatureText>Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.</Header.FeatureText>
              <Header.Play>Play</Header.Play>
            </Header.Feature>
          </Header>
          <Card.Group>
            {slideRows.map((slideItem) => (
              <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                <Card.Title>{slideItem.title}</Card.Title>
                <Card.Entities>
                  {slideItem.data.map((item) => (
                    <Card.Item key={item.docId} item={item}>
                      <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  ))}
                </Card.Entities>
                <Card.Feature category={category}>
                  <Player>
                    <Player.Button />
                    <Player.Video src="/videos/bunny.mp4" />
                  </Player>
                </Card.Feature>
              </Card>
            ))}
          </Card.Group>
          <FooterContainer />
        </>
      ) : (
        <ProfilesContainer logout={logout} user={user} setProfile={setProfile} />
      )}
    </div>
  )
}
