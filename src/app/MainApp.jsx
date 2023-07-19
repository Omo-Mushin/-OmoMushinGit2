import React, { Component } from 'react';
import firebase from 'firebase/compat';
import SideBarBottom from '../Components/sideBarBottom';
import { InfoList } from '../info';
import { getInfoList } from '../info';
import 'bootstrap/dist/css/bootstrap.css'
import Feed from '../Components/feed'
import Nav from '../Components/nav1';
import { paginate } from '../utilities/paginate1';
import reviews from './data';
import { Route, Redirect, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import LoginForm from '../pages/Login';
import Register from '../pages/Register';
import homePage from '../Components/home';
import Axios from 'axios';
import NewsPage from '../pages/Rentals';
import AdminRegistration from '../pages/AdminRegistration';
import Registration from '../pages/UserRegistration';
import { signOut } from 'firebase/auth';
import { dataBase } from './firebase';
import jwtDecode from 'jwt-decode'
import { Logout } from '@mui/icons-material';


const apiEndPoint = 'https://daddygo-cfb28-default-rtdb.firebaseio.com/daddygo.json'

class MainApp extends Component {
    state = { List: InfoList, onList: getInfoList(), status: "student",
    posts: [], pageSize: 3, currentPage: 1,login: false
     }
     

     async componentDidMount () {
        try {
            const response = await Axios.get(apiEndPoint);
        this.formatPostdata(response.data);

        const jwt = localStorage.getItem('token');
        const user = jwtDecode(jwt)
        // console.log(user)
        this.setState({ user })
        }
        catch (err) {
            alert('an unexpected error :  ', err )
        }
    }

    formatPostdata = (posts) => {
        const postData = [];
        // console.log(posts)
        for (let key in posts) {
            postData.push({ ...posts[key], id: key})
        }
        // console.log(postData)
        this.setState({ posts : postData})
    }
     
    // async componentDidMount() {

       
    //         const response = await fetch('https://daddygo-cfb28-default-rtdb.firebaseio.com/daddygo.json');
    //         const fetched = await response.json();
            
    //         console.log(fetched);
    //         // const fetchedposts = this.handleSpread(fetched)
    //         // console.log(fetchedposts.value)
    //         for (var [key, value] of Object.entries(fetched)) {
    //             // console.log( key );
    //             //   console.log(value)
    //             this.state.posts.push({id:key, ...value})
    //         }
            // }   
            // for (let [key, value] in fetched) {
            //     this.setState.posts.push(value)
                
            // }
        //  console.log(this.state.posts.id)
        
     
    // componentDidMount() { 
    //     const posts = [...this.state.posts]
        
    //     posts.liked = true
    //     console
    //  }
    handleSwitchList = listItem => {
        this.setState({selectedList : listItem})
        // console.log(listItem.name)
    }
    handleSwitch = page => {
        this.setState({currentPage : page})
        // console.log(page)
      }
      handleDelete = async (post) => {
            try {
                await Axios.delete(apiEndPoint + '/'+  post.name + '/' + post.id)

        const posts = this.state.posts.filter(p => p.id !== post.id)
        this.setState({ posts })
            } catch (error) {
                alert('something went wrong' + error)
            }
        
      }

      async handleLogOut() {
        await signOut(dataBase)
        this.props.history.push('/')
      }
    //   handlePost = async (url='', posts = {} ) => {
    //         const originalPosts = this.state.posts
    //     try {
    //         const response = await fetch(url, {
    //             method: 'POST', 
    //             mode: 'cors', cache: 'no-cache', 
    //             credentials: 'same-origin', 
    //             headers: {
    //                 'Content-Type' : 'application.json'
    //             },
    //             body: JSON.stringify(posts),
    //         })
    //         return response.json()
    //     } catch (error) {
    //         alert("There has been a problem with your request:", error);
    //         this.setState({ posts : originalPosts })
    //       }
    // }
    // handleDelete = async (post) =>  {
    //     const originalPosts = this.state.posts
    //     console.log(post.id)
    //     const posts = this.state.posts.filter(p => p.id !== post.id)
    //     this.setState({posts})
    //     try {
    //         await fetch('https://daddygo-cfb28-default-rtdb.firebaseio.com/daddygo.json' + '/' + post.id, {
    //             method: "DELETE",
    //             mode: 'cors', cache: 'no-cache', 
    //             credentials: 'same-origin', 
    //             headers: {
    //                 'Content-Type' : 'application.json'
    //             },
    //             body: JSON.stringify(posts)
    //         })
    //         ;
    //     } catch (err) {
    //         alert('an error occured');
    //         this.setState({posts : originalPosts})
    //     }
    

        // fetch('https://example.com/delete-item/' + id, {
        //     method: 'DELETE',
        //     })
        //     .then(res => res.text()) // or res.json()
        //     .then(res => console.log(res);
    
        
//         fetch('https://example.com/delete-item/' + id, {
//   method: 'DELETE',
// })
// .then(res => res.text()) // or res.json()
// .then(res => console.log(res)
    
    //   handleLike =  post => {
    //     console.log('Liked')
    //     const posts = [...this.state.posts]
    //     const index = posts.indexOf(post)
    //     posts[index] = {...post }
    //     posts[index].liked = true
    //     post[index].liked = !posts[index].liked
    //     console.log(posts[index].liked)
    //     this.setState({ posts : this.state.posts})
    // }

    render() { 
        const persons = paginate(this.state.posts, this.state.currentPage, this.state.pageSize)
        // console.log('posts', this.state.posts)
        return (
        <div className='app'>
            <Nav LogOut = {this.handleLogout} user={this.state.user  } />
                <div className='app-body'>
                        
                        {/* <SideBar items={this.state.onList} 
                        status={this.state.status}
                        switchList={this.handleSwitchList} 
                        selectedItem={this.state.selectedList} /> */}
                        {/* {/* <Feed  items={this.state.onList}/>} */}
                        <div className='feed'>
                            <Switch>
                                <Route path='/homePage' component={homePage} />
                                <Route path='/post/:name/:id/:text/:job' component={NewsPage} />
                                <Route path='/logout' component={Logout} />
                                <Route path='/movies' component={homePage} />
                                <Route path='/adminReg' component={AdminRegistration} />
                                <Route path='/reg' component={Registration} />
                                <Route path='/news' render={(props) =>
                                <SideBarBottom reviews={this.state.posts} 
                                        pageSize={this.state.pageSize} 
                                        currentPage={this.state.currentPage}
                                        switchPage={this.handleSwitch} 
                                        persons={persons} {...props}
                                        onLike={this.handleLike} 
                                        onDelete={this.handleDelete}/>
                                    }
                            />
                                <Route path='/register' 
                                render={(props) => <Register onPosts = {this.handlePost} 
                                posts={this.state.posts} {...props}
                                 />} />
                                <Route path='/login' component={LoginForm} />
                                <Route path='/not-found' component={NotFound} />
                                <Route path='/adverts' render={(props) => 
                                    <Feed  items={this.state.onList}
                                            status = {this.state.status}
                                            selectedItem={this.state.selectedList}
                                            switchList={this.handleSwitch}
                                            {...props}/>} />
                                
                                <Route exact path='/' render={(props) => 
                                    <Feed  items={this.state.onList} {...props}/>} />
                                <Redirect from='/' to='/movies'/>
                                <Redirect to='/not-found'/>
                            </Switch>
                            
                        </div>
                </div>
         </div>
            
        );
    }
}
 
export default MainApp;
{/* <SideBarBottom /> */}