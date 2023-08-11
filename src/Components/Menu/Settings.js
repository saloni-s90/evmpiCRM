import React from 'react'

function Settings() {
    return (
        <div>
            <h2>
                Settings
            </h2>

            <div className='mt-4'>
                <h4>Options of Input/Output </h4>
            </div>

            <div>
                <b>Volt</b>
                <div class="form-check form-check-inline ms-4">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">Min</label>
                </div>
                <div class="form-check form-check-inline ms-2">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">Max</label>
                </div>
                <div class="form-check form-check-inline ms-2">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                    <label class="form-check-label" for="inlineCheckbox3">Typical </label>
                </div>
            </div>

            <div>
                <b> Current</b>
                <div class="form-check form-check-inline ms-4">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">Min</label>
                </div>
                <div class="form-check form-check-inline ms-2">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">Max</label>
                </div>
                <div class="form-check form-check-inline ms-2">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                    <label class="form-check-label" for="inlineCheckbox3">Typical </label>
                </div>
            </div>

            <div>
                <b>Temperature</b>
                <div class="form-check form-check-inline ms-4">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">Min</label>
                </div>
                <div class="form-check form-check-inline ms-2">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">Max</label>
                </div>
                <div class="form-check form-check-inline ms-2">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                    <label class="form-check-label" for="inlineCheckbox3">Typical </label>
                </div>
            </div>

            <div className='mt-3'>
                <h4>Cycle Reminder</h4>
            </div>
            <div>
                User Alert
                <div class="form-check form-check-inline ms-4">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">Mobile</label>
                </div>
                <div class="form-check form-check-inline ms-2">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">E-Mail</label>
                </div>
            </div>

            <div>
                Input/Output Alert
                <div class="form-check form-check-inline ms-4">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">SMS</label>
                </div>
                <div class="form-check form-check-inline ms-2">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">E-Mail</label>
                </div>
                <div class="form-check form-check-inline ms-2">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                    <label class="form-check-label" for="inlineCheckbox3">Whatsapp </label>
                </div>
            </div>

            <div className='mt-3'>
                <h4> Cycle Reminder </h4>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Reminder</label>
                </div>
            </div>

            <div>
                <h5>Status</h5>

                <div class="dropdown">
                    channel
                    <button class="btn btn-secondary dropdown-toggle ms-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        channel
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">1</a></li>
                        <li><a class="dropdown-item" href="#">2</a></li>
                        <li><a class="dropdown-item" href="#">3</a></li>
                        <li><a class="dropdown-item" href="#">4</a></li>
                        <li><a class="dropdown-item" href="#">5</a></li>

                    </ul>

                    <button class="btn btn-secondary dropdown-toggle ms-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Timming
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">500ms-1000ms</a></li>
                        <li><a class="dropdown-item" href="#">1000ms-1500ms</a></li>
                        <li><a class="dropdown-item" href="#">1500ms-2000ms</a></li>
                        <li><a class="dropdown-item" href="#">2000ms-2500ms</a></li>
                        <li><a class="dropdown-item" href="#">2500ms-3000ms</a></li>

                    </ul>
                </div>
            </div>

            <button type="button" className="btn btn-outline-primary bt">Save</button>
            <button type="button" className="btn btn-outline-danger bt">Cancel</button>


        </div>
    )
}

export default Settings
