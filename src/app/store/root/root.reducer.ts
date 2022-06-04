import { createReducer, on } from '@ngrx/store';
import { UserRoleEnum } from 'src/app/models/UserRole.enum';
import { changeUserRoleEnum } from './root.actions';
export interface IRootInitialState {
  UserRoleEnum: UserRoleEnum;
}

export const initialState: IRootInitialState = {
  UserRoleEnum: UserRoleEnum.NONE,
};

export const rootReducer = createReducer(
  initialState,
  on(changeUserRoleEnum, (state, action) => {
    return {
      ...state,
      UserRoleEnum: action.role,
    };
  })
);
