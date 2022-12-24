# Overview of the project

## Outline

Create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.

# Framework used - NEXT.js 

URL - https://nextjs.org/

Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites


# External Libraries used

All libraries used are open source

### Code editor - React Ace 

Research - Checked the following platforms
1. Monaco Editor by Microsoft - https://github.com/microsoft/monaco-editor - Has all functionalities but too large in size
2. React textarea code editor - https://github.com/uiwjs/react-textarea-code-editor - Has some issues plus the community is smaller than the next.
3. React ace - https://github.com/securingsincity/react-ace - Good community and covers all features needed 

### AlaSQL

AlaSQL - is a lightweight client-side in-memory SQL database designed to work in browser and Node.js.

### React Table

Headless UI for building powerful tables & datagrids



# Page load time



# Optimisations performed




# Project Scope

## Must have features:
- Textarea to accept SQL queries. 
- Data sources can be picked from [here](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv)
- More than one query needed
- Data has to be shown in table format
- Predefined set of queries/tables needed
- Way to toggle between different queries

## Good to have features:
Now that you have a list of essential and crucial features, start thinking of features that will add more value to your application, features that act as top-ups, cherries on the cake, if you will. These additional features make your application more useful and make your user’s life a tad bit easier. Think of forms with inputs, buttons, and custom field validations.
- *Assume that a data analyst is going to use your application for an entire day. What are the features that will help them breeze through the day’s workload?*

### Following features were added -
- An option to Reset the query and the data
- Pagination in the table, because seeing all data at once can be overwhelming
- Jump to page option - this will allow user to jump to any page of the table directly
- Option to change the number of rows on each page of the table
- UX improvement - Striped table elements and slight background change for hovered items
- Option to download CSV file

## Features not in scope:
- Backend
- Query engine
- Query Validation
- Syntax Validations
- Queries need not be specific and need not result into actual data query
- The data and query need not be in sync

## Non-functional Requirements:
1. Use a JavaScript framework for your application, such as [React](https://reactjs.org/), [Vue.js](https://vuejs.org/), [Svelte](https://svelte.dev/), or any other framework. **DO NOT CODE IN VANILLA JAVASCRIPT.**
2. Host your code on a version control system, such as GitHub, GitLab or BitBucket. **SEND US THE LINK TO YOUR PROJECT, NOT A ZIP FILE.**
3. Deploy your application on services such as [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/), and send us the link to your deployed project. **DO NOT EXPECT THE JUDGE TO INSTALL YOUR APPLICATION ON A LOCAL INSTANCE.**
4. You are free to use any external library and dependency, as long as you mention it in the README.
5. In the README of your project, include the following details:
    1. A basic overview of your project.
    2. The JavaScript framework you chose, along with any major plugins or packages you installed.
    3. The page load time of your application, and how you measured this time.
    4. Any optimisations you did to decrease the load time or increase performance.
You get brownie points if you can render a large amount of rows in your application without breaking the browser, or without crashing it. If you can’t, no biggie.


# Research 

- Inspiration from SQL Lab in Superset - https://apache-superset.readthedocs.io/en/0.35.2/sqllab.html


# More ideas
- A form where we can customise different parts of the SQL query separately 
- Save queries for reusing them with description
- Multi-tab to run and analyze multiple queries at once
- Browse database metadata: tables, columns, indexes, partitions
- Table result can have option to Explore (analytics)
- Global Filter - implement a search to filter anything from a table
- Add ChatGPT3 to convert human statements to SQL queries
- Create a query history - state (success), start time, duration, progress, sql query, row
- Select numerical metric - show stats - min, max, avg, sum