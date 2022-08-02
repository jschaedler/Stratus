# CS2803-final-project
Website to search for flights using the duffel flights api and save searches utilizing a SQL database. 

# Run

In mysql run the following queries:

<blockquote>

    create database CS2803;

    use CS2803;

    create table users(

       username varchar(60) primary key,
    
       password varchar(60) not null
    
    )
    
    create table search(
    
    username varchar(60) not null,
    
    dest varchar(60),
    
    origin varchar(60),
    
    cabinClass varchar(60),
    
    passengers int, 
    
    departuredate varchar(60),
    
    returndate carchar(60)
    
    )
</blockquote>


To install all dependencies use: 
<blockquote>

    npm install

</blockquote>



To start the server, in the root directory use: 
<blockquote>

    node server.js 

</blockquote>

Navigate to: 
<blockquote>

    http://localhost:3000/

</blockquote>

# UI 

If you are just here for the view xD :


![stratus home page](https://user-images.githubusercontent.com/72584354/182202570-dca708ba-990a-4cb3-a2ff-4bdfe9342a64.png)



