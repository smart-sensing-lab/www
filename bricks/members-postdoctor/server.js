exports.url = '/members-postdoctor';
exports.get = function(req, done, fail) {
    done({
        members_postdoctorActive:'active',
        membersActive:'active'
    });
};  