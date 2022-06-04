import { createAction, props } from '@ngrx/store';
import { UserRoleEnum } from 'src/app/models/UserRole.enum';
export const changeUserRoleEnum = createAction(
  '[Root ChangeUserRoleEnum] ChangeUserRoleEnum',
  props<{ role: UserRoleEnum }>()
);
