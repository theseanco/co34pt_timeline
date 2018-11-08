import siteData from '../../siteData/texts_final.json'

const initialState = {
  texts: siteData.texts,
  titles: siteData.names,
  images: siteData.images,
  sounds: siteData.sounds,
  links: siteData.links,
}

const dataReducer = (state = initialState, action) => {
  return state
}

export default dataReducer
