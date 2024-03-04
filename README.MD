<div align="center" style="margin: 30px;">

![Cover Image](https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-09-06-daisy-ui-panel/daisyui.jpg "Cover Image")

<br />
<br />

</div>

<br />

# Marble AI Assessment Documentation

In this assessment, I undertook the task of implementing a user interface based on the Figma design and prototype provided by Marble AI. The project is built upon the [**Refine**](https://refine.dev) framework, a React-based, headless web application framework developed for building CRUD applications with flexibility in mind.

## Initial Steps

1. **Understanding Refine Framework:**
   I started by thoroughly studying the Refine framework to grasp the overall project structure and flow.

2. **Cloning the Project:**
   Using the provided documentation command:

   ```bash
   npm create refine-app@latest -- --example blog-refine-daisyui
   ```

   I cloned the project and set up the initial environment.

3. **Exploring UI and Code:**
   To gain a better understanding, I explored the UI components and delved into the codebase to comprehend how each component interacts.

## Implementation Process

### Cards Component

1. **UI Planning:**
   I visually planned the UI for the chart component based on the Figma design and prototype provided by Marble AI.

2. **Card Implementation:**
   Initially, I implemented four hard-coded cards with titles, prices, and edit icons on the top right corner.

3. **Optimization:**
   I optimized the card implementation by creating an object containing card details. This allowed for the creation of a reusable card component, and data was mapped accordingly.

4. **Interactive Features:**
   Added Tailwind effects and hover animations to make the chart collapsible when the user clicks on the arrow in the top-right corner of the card.

## Charts Component

1. **Recharts Library:**
   Utilized the Recharts library for implementing the charts.

2. **Mock Data Creation:**
   Created mock data according to the Figma design values, including date, price1, price2, value1, value2, and percentage.

3. **Table Implementation:**
   Implemented a table with the created data and optimized it with CartesianGrid, Label, Values, Line Colors, and Tooltip functionalities.

## Date Range Picker Component

1. **Data Filtering:**
   Used the React DatePicker library to enable users to select a date range. The selected date range filters the data, and the filtered data is then passed to the LineChart component.

2. **Graph Dynamics:**
   Implemented functionality to dynamically update graphs based on the selected date range.

## Folder Structure and Clean Code

1. **Modular Structure:**
   Maintained a clean and modular folder structure to ensure code organization and readability.

2. **Bug-Free Implementation:**
   Ensured a bug-free implementation with a focus on an impressive UI that aligns with the Figma design.

## Quick Start

To run the project locally:

1. _Clone the repository._
2. Navigate to the project folder.
3. Install dependencies with npm install.
4. Start the development server with npm run dev.
5. Access the application at http://localhost:5173.

## Conclusion

This assessment has been successfully completed, delivering the exact UI specified in the Figma design. The implementation includes a collapsible chart, data filtering through a date range picker, and a clean and bug-free codebase with an impressive UI.

For a more detailed tutorial on this app, you can refer to the complete blog post here.

## Resources

[Refine Documentation](https://refine.dev/docs/tutorial/introduction/index/)
[daisyUI Documentation](https://daisyui.com/docs/install/)

Feel free to explore the charts, analyze the data, and enjoy the seamless UI!

## Author

**Karthigeyan K**

- Website: [My Portfolio](https://comfy-vacherin-e10233.netlify.app/)
- LinkedIn: [https://www.linkedin.com/in/karthigeyan-k-53116a19a/](https://www.linkedin.com/in/karthigeyan-k-53116a19a/)
- GitHub: [https://github.com/Karthigeyankiruba](https://github.com/Karthigeyankiruba)
- Email: karthigeyan0901@gmail.com
