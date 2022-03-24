import { View, Text, SafeAreaView,Image, FlatList } from 'react-native'
import React,{useEffect,useState, useRef} from 'react'
import cards from '../../data/cards.json'
import Card from '../../components/Card'
import styles from './styles'
import { cardKeyExtractor, hitCard, pickRandomCard, showCard } from './helpers'
import ActionButton from '../../components/ActionButton'

const GameScreen = () => {
    const userCardsRef = useRef(null);
    const opponentCardsRef = useRef(null);
    const [allCards, setAllCards] = useState(new Array(...cards)) 
    const [userCards, setUserCards] = useState([]);
    const [opponentCards, setOpponentCards] = useState([]);
    const [userScore, setUserScore] = useState(0);
    const [opponentScore, setOpponentScore] = useState(0)



    const animate = () => {
        this.userCardsRef?.current?.scrollToEnd?.(true)
        this.opponentCardsRef?.current?.scrollToEnd?.(true)
    }

    const win = (winner,score) => {
        alert(`${winner} won the game`, `Score: ${score}`)
    }


    

  return (
    <SafeAreaView style={styles.root}>

        <Text style={styles.title}>Dealer's hand</Text>
        <Text style={styles.subtitle}>{opponentScore}</Text>
     <FlatList
            ref={userCardsRef}
            horizontal
            keyExtractor={cardKeyExtractor}
            style={styles.userCards}
            data={userCards}
            renderItem={({item}) => {
            return <Card {...item}/>
            }}
          />

    <Text style={styles.title}>Your Hand</Text>
    <Text style={styles.subtitle}>{userScore}</Text>

    <FlatList
            ref={opponentCardsRef}
            horizontal
            keyExtractor={cardKeyExtractor}
            style={styles.opponentCards}
            data={opponentCards}
            renderItem={({item}) => {
            return <Card {...item}/>
            }}
          />

          <View style={styles.actiopnButtons}>
              <ActionButton title="Hit" onPress={hitCard({
                  allCards,
                  setAllCards,
                   setUserCards,
                     setOpponentCards,
                     setUserScore,
                     setOpponentScore,
                      animate,
                      win,
                      userScore,
                    opponentScore,
                      })}/>
              <ActionButton title="Show" onPress={showCard({
                  userScore,
                  opponentScore,
                   setOpponentScore,
                   setOpponentCards,
                    allCards,
                     setAllCards,
                      win
                    })
                }
                      />
        </View>

    </SafeAreaView>
  )
}

export default GameScreen