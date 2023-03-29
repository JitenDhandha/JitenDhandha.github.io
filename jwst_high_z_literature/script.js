// Main function
function main() {
    // Loop through list of papers and populate table
    // Get list of filter fields from checkboxes
    var filter_fields = [];
    var not_other = ["CEERS", "GLASS", "SMACS J0723.3-7323"];

    if (document.getElementById("ceers_cbox").checked) {
        filter_fields.push("CEERS");
    }

    if (document.getElementById("glass_cbox").checked) {
        filter_fields.push("GLASS");
    }

    if (document.getElementById("smacs_cbox").checked) {
        filter_fields.push("SMACS J0723.3-7323");
    }

    if (document.getElementById("other_cbox").checked) {
        filter_fields.push("other");
    }

    // Set table HTML string to blank
    var table_html = "";

    //Sort papers by date of submission and last name of first author
    papers.sort(function compare(p1, p2) {
        var [y1,m1,d1] = p1.date.split("/");
        var [y2,m2,d2] = p2.date.split("/");
        if((y2>y1) || (y2==y1 && m2>m1) || (y2==y1 && m2==m1 && d2>d1)){
            return -1;
        } else if (y2==y1 && m2==m1 && d2==d1){
            var n1 = p1.authors[0].split(",")[0];
            var n2 = p2.authors[0].split(",")[0];
            if(n2>n1){
                return -1;
            } else {
                return +1;
            }
        } else {
            return +1;
        }
    });

    for (var i = 0; i < papers.length; i++) {
        // Get paper element
        var paper = papers[i];

        // Get paper fields
        var fields = paper.fields;

        // Check if the paper is in the fields selected
        var show = false;
        if(filter_fields.length==0){
            show = true;
        } else {
            for (var j = 0; j < filter_fields.length; j++) {
                if(fields.includes(filter_fields[j])){
                    show = true; break;
                }
                if(filter_fields[j]=="other"){
                    var arr = fields.filter(a => !not_other.includes(a));
                    if(arr.length === 0){
                        show=false;
                    } else {
                        show = true; break;
                    }
                }
            }
        }

        // Show the paper if it is in selected fields
        if (show) {

            // Add table row
            table_html += '<tr class="arxiv_row"><td class="arxiv_item">';

            // Get authors and year of publication
            var auths = paper.authors;

            if (auths.length > 2) {
                var auths_str = auths[0].split(",")[0] + " et al.";
            } else if (auths.length == 2) {
                var auths_str = auths[0].split(",")[0] + " and " + auths[1].split(",")[0];
            } else {
                var auths_str = auths[0].split(",")[0];
            }

            var year = paper.date.split("/")[0];
            auths_str += " (" + year + ")";

            // Add authors to HTML
            table_html += '<div class="author">' + auths_str + '</div>';

            // Get title and link
            var title = paper.title;
            var link = paper.arxiv_url;

            // Format title to work with MathJax
            title = title.replace(/(\$)([^\$]+)(\$)/g, "\\($2\\)");

            // Sanitise title to remove explicit angle brackets
            title = title.replace(/</g, "&lt;");
            title = title.replace(/>/g, "&gt;");

            // Add title to HTMl
            table_html += '<div class="title"><a href="' + link + '">' + title + '</a></div>';

            // Add fields to HTMl
            var fields_str = "Fields: ";
            for (var k = 0; k < fields.length; k++) {
                var field = fields[k];
                var color_selector = "Brown";
                if(field=="CEERS"){
                    color_selector = "SlateBlue";
                } else if(field=="GLASS"){
                    color_selector = "MediumSeaGreen";
                } else if(field=="SMACS J0723.3-7323"){
                    color_selector = "GoldenRod";
                }
                fields_str += '<span style="color:' + color_selector + '">' + field + '</span>';
                if (k!==fields.length-1){
                    fields_str += ", ";
                }
            }

            table_html += '<div class="comms">' + fields_str + '</div>';

            // Close column tag
            table_html += '</td><tr>';
        }
    }

    // Write to the table
    document.getElementById("main_table").innerHTML = table_html;

    // Reload MathJax
    reload_mathjax();
}

// Wait until page has loaded before running script
document.addEventListener('DOMContentLoaded', main, false);