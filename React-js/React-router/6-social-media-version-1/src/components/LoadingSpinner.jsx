function loadingSpinner(){
    return <>
        <div class="d-flex justify-content-center spinner">
            <div class="spinner-border" role="status" style={{height:"3rem",width:"3rem"}}>
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </>
}

export default loadingSpinner;