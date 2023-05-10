// Main function
function main() {
    // Loop through list of papers and populate table
    // Get list of filter fields from checkboxes
    var filter_fields = [];
    var all_fields = ["CEERS", 
                     "GLASS",
                     "SMACS 0723",
                     "Stephan's Quintet",
                     "JADES",
                     "NGDEEP",
                     "PEARLS",
                     "UNCOVER",
                     "MACS0647-JD",
                     "RX J2129"];
    var all_fields_cbox = ["ceers_cbox", 
                     "glass_cbox",
                     "smacs_cbox",
                     "stephans_cbox",
                     "jades_cbox",
                     "ngdeep_cbox",
                     "pearls_cbox",
                     "uncover_cbox",
                     "macs_cbox",
                     "rxj_cbox"];
    var all_field_colors = ["#76448a",
                            "#117864",
                            "#b7950b",
                            "#f1948a",
                            "#5dade2",
                            "#49156f",
                            "#30e498",
                            "#85a86a",
                            "#e266b8",
                            "#62ada6"];

    for (var i=0; i<all_fields.length; i++) {
        if(document.getElementById(all_fields_cbox[i]).checked){
            filter_fields.push(all_fields[i]);
        }
    }
    if(document.getElementById("other_cbox").checked){
        filter_fields.push("Other");
    }

    // Set table HTML string to blank
    var table_html = "";

    //Sort papers by date of submission and last name of first author
    papers.sort(function compare(p1, p2) {
        var [y1,m1,d1] = p1.date.split("/");
        var [y2,m2,d2] = p2.date.split("/");
        if((y2>y1) || (y2==y1 && m2>m1) || (y2==y1 && m2==m1 && d2>d1)){
            return +1;
        } else if (y2==y1 && m2==m1 && d2==d1){
            var n1 = p1.authors[0].split(",")[0];
            var n2 = p2.authors[0].split(",")[0];
            if(n2>n1){
                return +1;
            } else {
                return -1;
            }
        } else {
            return -1;
        }
    });

    for (const paper of papers) {

        // Get paper fields
        var fields = paper.fields;

        // Check if the paper is in the fields selected
        var show = false;
        if(filter_fields.length==0){
            show = true;
        } else {
            for (const filter_field of filter_fields) {
                if(fields.includes(filter_field)){
                    show = true; break;
                }
                if(filter_field=="Other"){
                    var arr = fields.filter(a => !all_fields.includes(a));
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
            for (var i=0; i<fields.length; i++) {
                var field = fields[i];
                var j = all_fields.indexOf(field);
                if(j !== -1){
                    var color_selector = all_field_colors[j];
                } else {
                    var color_selector = "#b03a2e";
                }
                fields_str += '<span style="color:' + color_selector + '">' + field + '</span>';
                if (i!==fields.length-1){
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