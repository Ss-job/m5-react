import types from '../actions/types';

/**
 * генерирует action для добавления нового товара
 * @param {int} id идентификатор добавляемого товара
 * @returns {object} возвращает объект action
 */
export function addToStoreCatalog(catalogId) {

    let data = {
        type: types.addToStoreCatalog,
        payload: { catalogID: catalogId }
    }
    console.log(data);
    return data;
}
export function addToFilterCountry(countryId) {

    let data = {
        type: types.addToFilterCountry,
        payload: { 
            countryId: countryId, 
        }
    }
    console.log(data);
    return data;
}

export function addToFilterComposition(compositionId) {

    let data = {
        type: types.addToFilterComposition,
        payload: { compositionId: compositionId }
    }
    console.log(data);
    return data;
}

export function addToFilterQuality(qualityId) {

    let data = {
        type: types.addToFilterQuality,
        payload: { qualityId: qualityId }
    }
    console.log(data);
    return data;
}

export function addToFilterName(name) {

    let data = {
        type: types.addToFilterName,
        payload: { name: name }
    }
    console.log(data);
    return data;
}