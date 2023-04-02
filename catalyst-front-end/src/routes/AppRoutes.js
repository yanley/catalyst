import { Routes, Route } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import LoginPage from '../pages/LoginPage';
import MockJobCards from '../components/MockJobCards';
import RegistrationPage from '../pages/RegistrationPage';
import Profile from '../pages/Profile';

export const AppRoutes = (props) => {

    return (

        <Routes>
            {/* nested routes can be used for URLs like /home/tasks or where the parent component needs to render the children */}
            <Route exact path='/' element={<MockJobCards {...props} />} />

            <Route path='/login' element={<LoginPage />} />

            <Route path='/register' element={<RegistrationPage {...props} />} />

            <Route path='/profile' element={<Profile />} />

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
