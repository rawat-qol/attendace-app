// Overview.js

const Overview = () => {
    return (

        <div className="flex items-center justify-center">
        <div className="max-w-xl flex w-full">
            <div className="w-1/2 p-4">
                <img className="w-full rounded-lg" src="./images/apple.jpg" alt="Photo Description" />
            </div>
            <div className="w-1/2 p-4">
                <div className="font-bold text-2xl mb-4">Overview of Apple</div>
                <p className="text-gray-700 text-lg">
                Apples are crisp, round fruits that come in various colors like red, green, and yellow. They're known for their sweet or sometimes tart taste, depending on the variety. Apples are rich in fiber, vitamins, and antioxidants, making them a healthy snack choice. They are versatile, used in various culinary applications from pies and sauces to being enjoyed fresh off the tree.
                </p>
            </div>
        </div>
    </div>
   
   /*<div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Overview</h1>
            <div className="max-w-md rounded overflow-hidden shadow-lg mb-4">
                <img className="w-full" src="./images/apple.jpg" alt="Photo Description" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">It is an Apple</div>
                    <p className="text-gray-700 text-base">
                    Apples are crisp, round fruits that come in various colors like red, green, and yellow. They're known for their sweet or sometimes tart taste, depending on the variety. Apples are rich in fiber, vitamins, and antioxidants, making them a healthy snack choice. They are versatile, used in various culinary applications from pies and sauces to being enjoyed fresh off the tree.
                    </p>
                </div>
            </div>
        </div>
        */
    );
};

export default Overview;