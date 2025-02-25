import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's default styling

const WriteDescription = ({ setValue, value }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modules = {
        toolbar: [
            // Font style
            [{ font: [] }], // Font family dropdown
            [{ size: [] }], // Font size dropdown

            // Headers
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // Dropdown for headers

            // Text styling
            ["bold", "italic", "underline", "strike"], // Bold, italic, underline, strike-through

            // Lists and Indents
            [{ list: "ordered" }, { list: "bullet" }], // Ordered and unordered lists
            [{ indent: "-1" }, { indent: "+1" }], // Indent and outdent

            // Scripts and Alignment
            [{ script: "sub" }, { script: "super" }], // Subscript and superscript
            [{ align: [] }], // Text alignment options

            // Colors
            [{ color: [] }, { background: [] }], // Font color and background color

            // Rich Media
            ["link", "image", "video"], // Links, images, and videos

            // Blocks
            ["blockquote", "code-block"], // Blockquote and code block

            // Math and Formatting
            ["formula"], // Math formulas
            ["clean"], // Clear formatting
        ],
    };


    return (
        <div>
            {/* Button to open modal */}
            <span
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded cursor-pointer font-bold hover:bg-orange-50 inline-block mt-2"
            >
                Open Editor
            </span>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-full h-full lg:w-3/4 lg:h-3/4 p-6 rounded-md">
                        {/* Close button */}
                        <span
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 cursor-pointer"
                        >
                            Close
                        </span>

                        {/* Editor */}
                        <ReactQuill
                            modules={modules}
                            value={value}
                            onChange={setValue}
                            theme="snow"
                            style={{
                                height: "calc(100% - 50px)", // Adjust height to fit modal
                                width: "100%",
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default WriteDescription;






























// import { Editor } from '@tinymce/tinymce-react';
// const WriteDescription = ({ editorRef, formData, setFormData, description }) => {
//     return (
//         <div className="mt-2">
//             <Editor
//                 apiKey='ozu7if3qbmlv3ewcmorf58hwgz4j1on658flbuslvoxnq3dc'
//                 onInit={(evt, editor) => (editorRef.current = editor)}
//                 init={{
//                     plugins: [
//                         // Core editing features
//                         'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
//                         // Your account includes a free trial of TinyMCE premium features
//                         // Try the most popular premium features until Dec 28, 2024:
//                         'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
//                     ],
//                     toolbar: 'undo redo | blocks fontfamily fontsize formatselect | bold italic underline strikethrough backcolor forecolor  | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//                     tinycomments_mode: 'embedded',
//                     tinycomments_author: 'Author name',
//                     mergetags_list: [
//                         { value: 'First.Name', title: 'First Name' },
//                         { value: 'Email', title: 'Email' },
//                     ],
//                     ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
//                 }}
//                 initialValue={description && description ? description : "<p>Write your blog description here...</p>"}
//                 onEditorChange={(content) => setFormData({ ...formData, description: content })}

//             />


//         </div>
//     );
// };

// export default WriteDescription;