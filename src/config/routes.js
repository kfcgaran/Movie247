import App from '../App'
import Search from '../components/Search'
import Details from '../components/Details'
import VideoView from '../components/VideoView'
import Category from '../components/Category'
import GridListMovies from '../components/GridListMovies'
import Splash from '../components/Splash'

const Routes = {
    Home: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },
    Search: {
        screen: Search,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },
    Details: {
        screen: Details,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },
    VideoView: {
        screen: VideoView,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },
    Category: {
        screen: Category,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },
    GridListMovies: {
        screen: GridListMovies,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },
    Splash: {
        screen: Splash,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },
}

export default Routes