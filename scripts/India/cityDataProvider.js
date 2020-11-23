const citiesCollection = [

'Hyderabad', 'Bangalore', 'Chennai', 'Mumbai', 'New Delhi', 'Kolkata'

];

export function useCity() {
    return citiesCollection.slice()
}