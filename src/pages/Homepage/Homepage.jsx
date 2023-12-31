import { View } from "react-native"
import styles from "./homepage.style"
import Searchbar from "../../components/searchbar"
import Showcase from "../Showcase/Showcase"
import Categories from "../../components/categories/Categories"

export default function Homepage() {

    const handleClick = (text) => {
        console.log(text)
    }

    return (
        <View style={styles.container}>
            <Searchbar handleClick={handleClick} />
            <Categories />
            <Showcase />
        </View>
    )
}