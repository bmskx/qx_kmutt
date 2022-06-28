import { FETCH_ACTIVITY , FETCH_ACTIVITY_BY_SLUG } from "./type";

import ActivityService from "../../services/activity.js";

export const fetchActivity = (pageSize = 25) => {
  return (dispatch) => {
    ActivityService.getActivity(pageSize).then((response) => {
      if (response.length) {
        dispatch(fetchActivitySuccess(response));
      }
    });
  };
};

export const fetchActivityBySlug = (slug) => { 
  return (dispatch) => {
    ActivityService.getActivityBySlug(slug).then((response) => {
      if (response.length) {
        dispatch(fetchActivityBySlugSuccess(response[0]));
      }
    });
  };
};

export const fetchActivitySuccess = (activities) => {
  return {
    type: FETCH_ACTIVITY,
    payload: activities,
  };
};

export const fetchActivityBySlugSuccess = (activity) => {
  return {
    type: FETCH_ACTIVITY_BY_SLUG,
    payload: activity,
  };
};
