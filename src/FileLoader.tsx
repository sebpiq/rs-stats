import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { read, WorkBook, utils } from 'xlsx'
import { FbStatData, FbStatDataRaw, FbStatDatum, FbStatDatumRaw } from './types'
import { parseDateString } from './utils'

interface Props {
    className?: string
    onLoad: (parsed: FbStatData) => void
}

const FileLoader: React.FunctionComponent<Props> = ({ className, onLoad }) => {
    const onDrop = useCallback((acceptedFiles) => {
        const reader = new FileReader()
        reader.onload = function (evt) {
            if (!evt || !evt.target || !evt.target.result) {
                console.error('missing file')
                return
            }
            const data = new Uint8Array(evt.target.result as ArrayBuffer)
            const wb: WorkBook = read(data, {type: 'array'})
            const parsed = utils.sheet_to_json(Object.values(wb.Sheets)[0]) as FbStatDataRaw
            const inflated: FbStatData = parsed.slice(1).map((rawDatum: FbStatDatumRaw) => ({
                ...rawDatum,
                "Publié": parseDateString(rawDatum.Publié)
            }))
            onLoad(inflated)
        }
        reader.readAsArrayBuffer(acceptedFiles[0]);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    })

    return (
        <div className={className} {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
        </div>
    )
}

export default styled(FileLoader)`
    padding: 1em;
    border: solid 1px black;
    display: inline-block;
    cursor: pointer;
`
