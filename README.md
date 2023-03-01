
# project setup
1. run `npm install` to install node modules
2. start project with `npm start` or `node index.js`

# github repository
https://github.com/Jahir509/test-rs-lab

**A beta version is being hosted on linux server of this workable project at 103.163.116.18:3001  **

# API'S - Multiple Endpoint
    Task: 1.Count how many documents don't have the 'rider' property
    
    ->Api: "103.163.116.18:3001/api/riders/count"
    
    Task: 2.Given that a rider can only take a maximum of 10 parcels in a bag, which riders are ready to
    deliver. in simpler terms, give the list of riders along with the parcel id who don't have more than 10
    parcels in their bag.

    ->Api: "103.163.116.18:3001/api/riders/weight"

    Task: 3.Provide info for all the riders id along with their total collected amount

    ->Api: "103.163.116.18:3001/api/riders/collection"

# API'S - Single Endpoint
    "A single enpoint is also available for query three different types of data based on query string"
    -> Api: "103.163.116.18:3001"/api/query/search
            
            for Task 1: "103.163.116.18:3001"/api/query/search?riders=(true/false) whether rider property have or not
            
            for Task 2: "103.163.116.18:3001"/api/query/search?weight=(number) to set the maximum weight a rider can have

            for Task 3: "103.163.116.18:3001"/api/query/search?collection=(***) to show total collection
