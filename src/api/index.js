import api from './axios';

// Get all categories
export const getAllCategories = () => 
  api.get('/get_all_categories');

// Get all artworks
export const getAllArtworks = () => 
  api.get('/get_all_artworks');

// Get artworks by category id
export const getArtworksByCategory = (categoryId) =>
  api.get(`/get_artworks_by_category/${categoryId}`);
