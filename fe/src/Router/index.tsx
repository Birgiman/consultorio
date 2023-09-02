import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../view/layouts/AuthLayout';
import { DashboardLayout } from '../view/layouts/DashboardLayout';
import { Accounts } from '../view/pages/Accounts';
import { Login } from '../view/pages/Login';
import { Register } from '../view/pages/Register';
import { Schedule } from '../view/pages/Schedule';
import { AuthGuard } from './AuthGuard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/auth/login" replace />} />

        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
          </Route>
        </Route>


        <Route element={<AuthGuard isPrivate />}>
          <Route element={<DashboardLayout />}>
            <Route path='/dashboard/schedule' element={<Schedule />} />
            <Route path='/dashboard/accounts' element={<Accounts />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
